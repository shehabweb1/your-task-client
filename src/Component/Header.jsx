import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
		</>
	);
	return (
		<div className="navbar bg-base-100">
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
				<Link to="/login" className="btn lg:btn-lg">
					Get Started
				</Link>
			</div>
		</div>
	);
};

export default Header;
