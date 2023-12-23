import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Main from "../Layout/Main";
import Dashboard from "./../Pages/Dashboard";
import Price from "./../Pages/Price";
import Contact from "../Pages/Contact";
import Login from "./../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/AddTask";

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
			{
				path: "pricing",
				element: <Price />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <SignUp />,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Main />
			</PrivateRoute>
		),
		children: [
			{
				path: "task-board",
				element: <Dashboard />,
			},
			{
				path: "add-task",
				element: <AddTask></AddTask>,
			},
		],
	},
]);

export default router;
