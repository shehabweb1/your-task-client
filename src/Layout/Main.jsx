import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import useUser from "./../CustomHooks/useUser";

const Main = () => {
	const { user } = useUser();
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
						<NavLink to="/dashboard/task-board">
							<FaTasks />
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/add-task">
							<MdAddTask />
							Add Task
						</NavLink>
					</li>

					<div className="divider divider-primary my-6"></div>
					<li>
						<NavLink to="/">
							<FaHome />
							Home
						</NavLink>
					</li>
					<div className="divider divider-primary my-6"></div>
					<li>
						<div className="flex shadow-2xl px-4 py-10 rounded-xl flex-col items-center justify-between  glass">
							<div>
								<img
									src={user?.photoURL}
									className="w-32 h-32 rounded-full shadow-2xl object-cover"
								/>
							</div>
							<div className="text-center">
								<h1 className="text-3xl font-bold">{user?.displayName}</h1>
								<p className="my-4 lowercase">{user?.email}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Main;
