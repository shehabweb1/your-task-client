import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaTasks, FaUser } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";

const Main = () => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content min-h-screen flex flex-col items-center justify-center">
				<label
					htmlFor="my-drawer-2"
					className="btn absolute left-4 top-2 drawer-button lg:hidden"
				>
					<FaBars className="text-lg" />
				</label>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu uppercase p-4 w-80 text-lg min-h-full bg-zinc-900 text-white">
					<div className="flex items-center justify-center gap-4 mb-8">
						<NavLink
							to="/"
							className="text-blue-600 text-2xl lg:text-5xl font-extrabold"
						>
							Your<span className="text-green-600 font-bold italic">Task</span>
						</NavLink>
					</div>
					<li>
						<NavLink to="/dashboard/profile">
							<FaUser />
							My Profile
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/addTask">
							<MdAddTask />
							Add Task
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/todo">
							<FaTasks />
							Task List
						</NavLink>
					</li>

					<div className="divider divider-primary my-6"></div>

					<li>
						<NavLink to="/">
							<FaHome />
							Home
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Main;
