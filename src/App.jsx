import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import useUser from "./CustomHooks/useUser";
import { FadeLoader } from "react-spinners";

const App = () => {
	const { loading } = useUser();
	const location = useLocation();
	const noHeaderFooter =
		location.pathname.includes("login") ||
		location.pathname.includes("register");

	if (loading) {
		return <FadeLoader className="h-16 w-16 text-gray-900/50 mx-auto" />;
	}
	return (
		<div>
			{noHeaderFooter || <Header />}
			<Outlet />
			{noHeaderFooter || <Footer />}
		</div>
	);
};

export default App;
