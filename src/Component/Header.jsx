import { Link, NavLink, useNavigate } from "react-router-dom";
import useUser from "../CustomHooks/useUser";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
	const { user, logOut } = useUser();
	const navigate = useNavigate();

	const navItem = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/about">About Us</NavLink>
			</li>
			<li>
				<NavLink to="/pricing">Pricing</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact Us</NavLink>
			</li>

			{user && (
				<li>
					<NavLink to="/dashboard/task-board">Dashboard</NavLink>
				</li>
			)}
		</>
	);

	const handleLogout = () => {
		logOut().then(() => {
			toast.success("Your account has been sign out!");
			navigate("/");
		});
	};

	return (
		<div className="navbar bg-base-100 sticky top-0 left-0 z-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItem}
					</ul>
				</div>
				<NavLink
					to="/"
					className="text-blue-600 text-2xl lg:text-5xl font-extrabold"
				>
					Your<span className="text-green-600 font-bold italic">Task</span>
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-lg menu-horizontal px-1">{navItem}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<button className="btn btn-neutral" onClick={handleLogout}>
						Sign Out
					</button>
				) : (
					<Link to="/login" className="btn btn-neutral">
						Get Started
					</Link>
				)}
			</div>
			<Toaster position="top-right" reverseOrder={true} />
		</div>
	);
};

export default Header;
