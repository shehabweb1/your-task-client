import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Main from "../Layout/Main";
import Dashboard from "./../Pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
	{
		path: "dashboard",
		element: <Main />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
]);

export default router;
