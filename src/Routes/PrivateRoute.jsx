import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import useUser from "./../CustomHooks/useUser";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useUser();
	const location = useLocation();

	if (loading) {
		return <FadeLoader />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
