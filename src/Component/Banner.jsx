import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div
			className="hero"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content py-20 lg:py-40 text-center">
				<div className="max-w-md text-white">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">
						Welcome to our task management platform <br />
						Join our platform and enjoy your task management
					</p>
					<Link to="/login">
						<button className="btn btn-primary">Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
