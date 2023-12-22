import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div
			className="hero"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/5538345/pexels-photo-5538345.jpeg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content py-20 lg:py-40 text-center">
				<div className="max-w-md text-white">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">
						Welcome to our task management platform <br />
						Join our platform and grow your productivity
					</p>
					<Link to="/dashboard">
						<button className="btn btn-neutral">Let’s Explore</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
