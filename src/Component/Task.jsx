import { Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";
import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 8px;
	margin: 0 10px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const TextContent = styled.div``;

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

	const handleDelete = (id) => {
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
					.delete(`/api/tasks/${id}`)
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
		<Draggable draggableId={task._id} key={task._id} index={index}>
			{(provided) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					// isDragging={snapshot.isDragging}
				>
					<div className="m-1 p-2 rounded-md text-white bg-blue-600">
						<TextContent className="text-2xl font-bold capitalize">
							{task.title}
						</TextContent>
						<TextContent className="text-md my-3">
							{task.description}
						</TextContent>
						<div className="flex items-center justify-between text-xs mt-3">
							<div>
								<TextContent className="text-sm mb-1 capitalize">
									<strong>Priority:</strong> {task.priority}
								</TextContent>
								<p className="text-sm">
									<strong>Due on:</strong> {task.deadline}
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<button
									onClick={() =>
										document.getElementById(`my_modal_${task._id}`).showModal()
									}
								>
									<FaEdit className="text-2xl text-white" />
								</button>
								<dialog id={`my_modal_${task._id}`} className="modal">
									<div className="modal-box w-10/12 max-w-3xl bg-blue-600 text-white">
										<h3 className="font-bold text-2xl text-center text-white">
											Edit Task!
										</h3>
										<p className="text-xs text-right my-2 italic">
											Press ESC to cancel!
										</p>
										<div className="">
											<form onSubmit={handleSubmit(onSubmit)} method="dialog">
												<div className="form-control">
													<label className="label">
														<span className="label-text text-white text-sm">
															Task
														</span>
													</label>
													<input
														defaultValue={task?.title}
														type="text"
														name="title"
														{...register("title")}
														placeholder="task title"
														className="input input-bordered text-black"
														required
													/>
												</div>

												<div className="form-control">
													<label className="label">
														<span className="label-text text-white text-sm">
															Description
														</span>
													</label>
													<textarea
														type="textarea"
														defaultValue={task?.description}
														name="description"
														{...register("description")}
														placeholder="task description"
														className="textarea textarea-bordered text-black"
														required
													/>
												</div>

												<div className="form-control">
													<label className="label">
														<span className="label-text text-white text-sm">
															Deadline
														</span>
													</label>
													<input
														type="date"
														defaultValue={task?.deadline}
														name="date"
														{...register("date")}
														className="input input-bordered text-black"
														required
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text text-white text-sm">
															Priority
														</span>
													</label>
													<select
														defaultValue={task?.priority || "default"}
														{...register("priority", { required: true })}
														className="select select-bordered w-full text-black"
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
														className="btn btn-neutral capitalize"
													>
														Edit task
													</button>
												</div>
											</form>
										</div>
									</div>
								</dialog>
								<button onClick={() => handleDelete(task._id)} className="">
									<FaTrashAlt className="text-2xl text-red-600" />
								</button>
							</div>
						</div>
						<div className="flex justify-end"></div>
					</div>
					{provided.placeholder}
				</Container>
			)}
		</Draggable>
	);
};

export default Task;
