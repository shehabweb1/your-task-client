import { Outlet } from "react-router-dom";
import SideBar from "./../Component/SideBar";
const Main = () => {
	return (
		<div>
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Main;
