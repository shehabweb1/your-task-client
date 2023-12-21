import { HiOfficeBuilding, HiPhone } from "react-icons/hi";
import { MdLocalPostOffice } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Contact = () => {
	const handleContactForm = (e) => {
		e.preventDefault();
		const form = e.target;
		Swal.fire(
			"Thank You!",
			"Your message has been sent successfully!",
			"success"
		);
		form.name.value = "";
		form.email.value = "";
		form.message.value = "";
	};
	return (
		<div>
			<div
				className="hero"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/4160139/pexels-photo-4160139.jpeg)",
				}}
			>
				<div className="bg-[#000000b3] w-full h-full"></div>
				<div className="hero-content text-center py-36 text-white">
					<div className="max-w-lg">
						<h1 className="text-5xl font-bold">CONTACT US</h1>
						<p className="py-6 text-2xl font-semibold">Welcome to Your Task</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto my-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
					<div className="bg-base-300 py-5 rounded-2xl">
						<h3 className="text-2xl text-center font-semibold mb-3">
							Our Contact Details
						</h3>
						<div className="ml-6">
							<table className="flex flex-col gap-3 text-xl mx-auto w-1/2">
								<tr>
									<td>
										<HiOfficeBuilding />
									</td>
									<td>Mohammadpur, Dhaka-1207</td>
								</tr>
								<tr>
									<td>
										<MdLocalPostOffice />
									</td>
									<td>contact@yourtask.com</td>
								</tr>
								<tr>
									<td>
										<HiPhone />
									</td>
									<td>+8801608451204</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="py-5">
						<h3 className="text-2xl text-center font-semibold mb-3">
							Our Contact Form
						</h3>
						<form onSubmit={handleContactForm} className="w-3/4 mx-auto">
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Enter your Full Name</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="Enter your Full Name"
									className="input input-bordered w-full pr-16"
									required
								/>
							</fieldset>
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Enter your email address</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="Enter your email address"
									className="input input-bordered w-full pr-16"
									required
								/>
							</fieldset>
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Write a Message</span>
								</label>
								<textarea
									className="textarea textarea-bordered"
									placeholder="Write a Message"
									name="message"
								></textarea>
							</fieldset>
							<button
								type="submit"
								className="btn bg-blue-600 hover:bg-blue-700 text-white mt-3"
							>
								<BsFillSendFill /> Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
