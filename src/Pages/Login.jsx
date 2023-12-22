import useUser from "../CustomHooks/useUser";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
	const { userLogin, loginWithGoogle } = useUser();
	const { register, handleSubmit, reset } = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		userLogin(data.email, data.password).then((result) => {
			if (result) {
				toast.success("Your account has been login successful!");
				reset();
				navigate(from, { replace: true });
			}
		});
	};

	const handleLoginWithGoogle = () => {
		loginWithGoogle()
			.then((result) => {
				if (result) {
					toast.success("Your account has been login successful!");
					navigate(location?.state ? location.state : "/");
				}
			})
			.catch((error) => {
				const errorMessage = error.message;
				toast.error(errorMessage);
			});
	};
	return (
		<>
			<Helmet>
				<title>YourTask | Login</title>
			</Helmet>
			<div className="w-10/12 mx-auto bg-base-200 py-20">
				<Link to="/">
					<h1 className="text-blue-600 text-5xl lg:text-7xl font-extrabold text-center">
						Your<span className="text-green-600 font-bold italic">Task</span>
					</h1>
				</Link>
				<h2 className="text-4xl text-center font-bold py-5">Login now!</h2>
				<div className="card shadow-2xl bg-base-100 lg:w-1/2 mx-auto">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								{...register("email", { required: true })}
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								{...register("password", { required: true })}
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-neutral">
								Login
							</button>
						</div>
					</form>
					<div className="my-5 flex gap-2 items-center justify-center">
						<p>Login With Google Account</p>
						<button
							onClick={handleLoginWithGoogle}
							className="flex items-center gap-2 py-1 px-5 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-600 hover:text-white"
						>
							<FaGoogle className="text-blue-600" /> Google
						</button>
					</div>

					<p className="py-5 text-center text-xl text-gray-500">
						Not a member?{" "}
						<Link
							to="/register"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
						>
							Create an Account
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
