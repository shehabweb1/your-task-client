import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUser = () => {
	return useContext(AuthContext);
};

export default useUser;
