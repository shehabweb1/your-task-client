import { FadeLoader } from "react-spinners";
import useTasks from "./../CustomHooks/useTask";
import TaskBoard from "./../Component/TaskBoard";

const Dashboard = () => {
	const { tasks, isPending, refetch } = useTasks();
	if (isPending) {
		return <FadeLoader />;
	}
	return (
		<div>
			<TaskBoard tasks={tasks} refetch={refetch} />
		</div>
	);
};

export default Dashboard;
