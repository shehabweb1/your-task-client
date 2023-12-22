import Lottie from "lottie-react";
import loadAnim from "../assets/LoadingAnimation.json";
import TaskBoard from "./../Component/TaskBoard";
import useTasks from "./../CustomHooks/useTask";

const Todo = () => {
	const { tasks, isPending, refetch } = useTasks();
	if (isPending) {
		return (
			<div className="flex items-center justify-center mt-20">
				<Lottie animationData={loadAnim} />
			</div>
		);
	}
	return (
		<div>
			<TaskBoard tasks={tasks} refetch={refetch} />
		</div>
	);
};
export default Todo;
