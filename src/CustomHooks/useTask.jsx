import useAxiosPublic from "./useAxiosPublic";
import useUser from "./useUser";
import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
	const { user } = useUser();
	const axiosPublic = useAxiosPublic();

	const {
		data: tasks = [],
		isPending,
		error,
		refetch,
	} = useQuery({
		queryKey: ["tasks", user?.email],
		queryFn: async () => {
			const res = await axiosPublic.get(`/api/tasks?email=${user?.email}`);
			return res.data;
		},
	});

	return { tasks, isPending, error, refetch };
};

export default useTasks;
