import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="text-center mx-auto">
			<Typography variant="h1">404</Typography>
			<Typography variant="h3">This page is not found</Typography>
			<Link to="/">
				<Button variant="contained">
					Go Home
				</Button>
			</Link>
		</div>
	);
};

export default ErrorPage;
