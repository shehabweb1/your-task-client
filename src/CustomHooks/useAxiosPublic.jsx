import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://yourtask-orcin.vercel.app",
});

const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
