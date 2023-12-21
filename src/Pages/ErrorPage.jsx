import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<Helmet>
				<title>This page is not found</title>
			</Helmet>

			<div className="text-center mx-auto py-20">
				<h1 className="text-7xl font-extrabold">404</h1>
				<h3 className="text-3xl font-bold my-5">This page is not found</h3>
				<Link to="/">
					<button className="btn btn-neutral">Go to Home</button>
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
