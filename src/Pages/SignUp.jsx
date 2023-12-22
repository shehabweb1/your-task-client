import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import useAxiosPublic from "./../CustomHooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const image_key = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const SignUp = () => {
	const { createUser, loginWithGoogle, userUpdate } = useContext(AuthContext);
	const axiosPublic = useAxiosPublic();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const imageFile = { image: data.image[0] };
		const res = await axiosPublic.post(image_api, imageFile, {
			headers: {
				"content-type": "multipart/form-data",
			},
		});

		if (res.data) {
			createUser(data.email, data.password)
				.then((result) => {
					if (result) {
						userUpdate(data.name, res.data.data.display_url)
							.then(() => {
								const userData = {
									name: data.name,
									email: data.email,
									image: res.data.data.display_url,
								};
								axiosPublic.post("/api/users", userData).then((res) => {
									if (res.data.insertedId) {
										toast.success(
											"Your Account has been created Successfully!"
										);
										navigate("/");
									}
								});
							})
							.catch((error) => {
								toast.error(error.message);
							});
					}
				})
				.catch((error) => {
					toast.error(error.message);
				});
		}
	};

	const handleLoginWithGoogle = () => {
		loginWithGoogle()
			.then((result) => {
				let googleUser = {
					name: result.user.email,
					email: result.user.displayName,
					image: result.user.photoURL,
				};
				if (result) {
					axiosPublic.post("/api/users", googleUser).then((res) => {
						if (res.data.insertedId) {
							navigate("/");
							toast.success("Your account has been login successful!");
						}
					});
				}
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<>
			<Helmet>
				<title>YourTask | Register</title>
			</Helmet>
			<div className="w-10/12 mx-auto bg-base-200 py-20">
				<Link to="/">
					<h1 className="text-blue-600 text-5xl lg:text-7xl font-extrabold text-center">
						Your<span className="text-green-600 font-bold italic">Task</span>
					</h1>
				</Link>
				<h2 className="text-4xl text-center font-bold py-5">
					Registration now!
				</h2>
				<div className="card shadow-2xl bg-base-100 lg:w-1/2 mx-auto">
					<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 "
							>
								Full Name
							</label>
							<div className="mt-2">
								<input
									id="name"
									name="name"
									type="text"
									{...register("name", { required: true, maxLength: 80 })}
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									placeholder="Enter your name"
								/>
							</div>
							{errors.name && (
								<p className="text-red-600">Write your valid name</p>
							)}
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 "
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									{...register("email", { required: true })}
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your email address"
								/>
							</div>
							{errors.email && (
								<p className="text-red-600">Enter your valid email</p>
							)}
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 "
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									{...register("password", {
										required: true,
										minLength: 6,
										pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
									})}
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									placeholder="Enter your password"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-600">Enter your valid password</p>
								)}
								{errors.password?.type === "minLength" && (
									<p className="text-red-600">Enter minimum 6 character</p>
								)}
								{errors.password?.type === "pattern" && (
									<p className="text-red-600">Enter one uppercase letter</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 "
							>
								Profile Photo
							</label>
							<div className="mt-2">
								<input
									type="file"
									{...register("image", { required: true })}
									name="image"
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								/>
							</div>
							{errors.image && (
								<p className="text-red-600">Upload your profile picture</p>
							)}
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-neutral">
								Registration Now
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

					<p className="my-10 text-center text-xl text-gray-500">
						If you have an account? Please{" "}
						<Link
							to="/login"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SignUp;
