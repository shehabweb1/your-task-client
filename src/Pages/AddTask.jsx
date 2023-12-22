import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUser from "../CustomHooks/useUser";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

const AddTask = () => {
	const { user } = useUser();
	const axiosPublic = useAxiosPublic();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		const addTask = {
			title: data.title,
			description: data.description,
			deadline: data.date,
			priority: data.priority,
			email: user?.email,
			category: "to-do",
		};
		axiosPublic
			.post("/api/tasks", addTask)
			.then((res) => {
				if (res.data.insertedId) {
					reset();
					toast("Task Added Successfully!", {
						icon: "✔",
						style: {
							borderRadius: "8px",
							background: "#333",
							color: "#fff",
						},
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
	};

	return (
		<div className="flex justify-center">
			<div className="relative flex flex-col rounded-xl bg-clip-border shadow-xl p-6">
				<h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-center antialiased uppercase">
					Add Tasks Here
				</h4>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="my-2 max-w-screen-lg sm:w-96"
				>
					{/* task title */}
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primary text-sm">Task</span>
						</label>
						<input
							type="text"
							name="title"
							{...register("title")}
							placeholder="task title"
							className="input input-bordered"
							required
						/>
					</div>
					{/* description */}
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primary text-sm">
								Description
							</span>
						</label>
						<textarea
							type="textarea"
							name="description"
							{...register("description")}
							placeholder="task description"
							className="textarea textarea-bordered"
							required
						/>
					</div>
					{/* date */}
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primary text-sm">Deadline</span>
						</label>
						<input
							type="date"
							name="date"
							{...register("date")}
							className="input input-bordered"
							required
						/>
					</div>
					{/* select importance */}
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primary text-sm">Priority</span>
						</label>
						<select
							defaultValue="default"
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
					{/* submit */}
					<div className="form-control mt-6">
						<button className="btn btn-primary capitalize">Add Task</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default AddTask;
