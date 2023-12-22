import { Draggable } from "react-beautiful-dnd";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

const Container = styled.div`
	border-radius: 10px;
	box-shadow: 4px 4px 4px 2px grey;
	padding: 8px;
	color: #000;
	margin-bottom: 8px;
	min-height: 90px;
	margin-left: 10px;
	margin-right: 10px;
	background-color: ${(props) => bgcolorChange(props)};
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const TextContent = styled.div``;

function bgcolorChange(props) {
	return props.isDragging
		? "lightgreen"
		: props.isDraggable
		? props.isBacklog
			? "#F2D7D5"
			: "#DCDCDC"
		: props.isBacklog
		? "#F2D7D5"
		: "#EAF4FC";
}

const Task = ({ task, index, refetch }) => {
	const axiosPublic = useAxiosPublic();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		const updatedTask = {
			title: data.title,
			description: data.description,
			deadline: data.date,
			priority: data.priority,
			email: task?.email,
			category: task?.category,
		};
		axiosPublic
			.put(`/api/tasks/${task._id}`, updatedTask)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						title: "Updated!",
						text: "Your service has been updated.",
						icon: "success",
					});
					reset();
					refetch();
					const modal = document.getElementById(`my_modal_${task._id}`);
					if (modal) {
						modal.close();
					}
				}
			})
			.catch((err) => {
				toast(err.message, {
					icon: "❌",
					style: {
						borderRadius: "8px",
						background: "#333",
						color: "#fff",
					},
				});
			});
	};

	const handleDelete = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "Do you really want to delete this task?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosPublic
					.delete(`/tasks/${task?._id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							refetch();
							Swal.fire({
								title: "Deleted!",
								text: "The task has been removed.",
								icon: "success",
							});
						}
					})
					.catch((err) => {
						toast(err.message, {
							icon: "❌",
							style: {
								borderRadius: "8px",
								background: "#333",
								color: "#fff",
							},
						});
					});
			}
		});
	};

	return (
		<Draggable draggableId={`${task._id}`} key={task._id} index={index}>
			{(provided, snapshot) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					isDragging={snapshot.isDragging}
				>
					<div>
						<div className="flex justify-between">
							<h1 className="text-xl font-bold tracking-widest">
								{task.title}
							</h1>
							<button onClick={handleDelete} className="">
								<TiDelete className="text-2xl text-red-500" />
							</button>
						</div>
						<div className="flex justify-between items-center my-1">
							<p className="italic text-md">{task.description}</p>

							<div>
								<button
									onClick={() =>
										document.getElementById(`my_modal_${task._id}`).showModal()
									}
								>
									<FaEdit className="text-xl text-slate-700" />
								</button>
								<dialog id={`my_modal_${task._id}`} className="modal">
									<div className="modal-box w-11/12 max-w-4xl bg-purple-200">
										<h3 className="font-bold text-2xl text-center text-secondary">
											Edit Task!
										</h3>
										<p className="text-xs text-right my-2 italic">
											Press ESC to cancel!
										</p>
										<div className="">
											<form onSubmit={handleSubmit(onSubmit)} method="dialog">
												<div className="form-control">
													<label className="label">
														<span className="label-text text-primary text-sm">
															Task
														</span>
													</label>
													<input
														defaultValue={task?.title}
														type="text"
														name="title"
														{...register("title")}
														placeholder="task title"
														className="input input-bordered"
														required
													/>
												</div>

												<div className="form-control">
													<label className="label">
														<span className="label-text text-primary text-sm">
															Description
														</span>
													</label>
													<textarea
														type="textarea"
														defaultValue={task?.description}
														name="description"
														{...register("description")}
														placeholder="task description"
														className="textarea textarea-bordered"
														required
													/>
												</div>

												<div className="form-control">
													<label className="label">
														<span className="label-text text-primary text-sm">
															Deadline
														</span>
													</label>
													<input
														type="date"
														defaultValue={task?.deadline}
														name="date"
														{...register("date")}
														className="input input-bordered"
														required
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text text-primary text-sm">
															Priority
														</span>
													</label>
													<select
														defaultValue={task?.priority || "default"}
														{...register("priority", { required: true })}
														className="select select-bordered w-full"
													>
														<option disabled value="default">
															Select a task priority
														</option>
														<option value="low">LOW</option>
														<option value="moderate">MODERATE</option>
														<option value="high">HIGH</option>
													</select>
												</div>
												<div className="form-control mt-6">
													<button
														type="submit"
														className="btn btn-primary capitalize"
													>
														Edit task
													</button>
												</div>
											</form>
										</div>
									</div>
								</dialog>
							</div>
						</div>
						<div className="flex items-center justify-between text-xs mt-3">
							<TextContent>
								<strong>Priority:</strong> {task.priority}
							</TextContent>
							<TextContent>
								<strong>Due on:</strong> {task.deadline}
							</TextContent>
						</div>
					</div>
					{/* <Icons>
            <div>
              <Avatar
                onClick={() => console.log(task)}
                src={"https://joesch.moe/api/v1/random?key=" + task.id}
              />
            </div>
          </Icons> */}
					{provided.placeholder}
				</Container>
			)}
		</Draggable>
	);
};

export default Task;
