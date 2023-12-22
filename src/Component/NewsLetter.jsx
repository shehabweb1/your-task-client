import toast from "react-hot-toast";

const NewsLetter = () => {
	const handleSubscribe = (e) => {
		e.preventDefault();
		const form = e.target;
		toast.success("Thank you for subscribing to our newsletter!");
		form.email.value = "";
	};
	return (
		<div
			className="w-full h-auto bg-cover bg-center py-14"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/8284722/pexels-photo-8284722.jpeg)",
			}}
		>
			<div className="max-w-sm md:max-w-xl lg:max-w-3xl mx-auto bg-black bg-opacity-90 rounded-xl p-5">
				<h3 className="text-3xl lg:text-5xl font-bold text-white text-opacity-75 uppercase text-center tracking-[10px] lg:tracking-[20px]">
					NewsLetter
				</h3>
				<div className="card-body text-center flex flex-col gap-4 text-white">
					<h2 className="text-2xl lg:text-4xl font-black">
						Don&#39;t miss new posts!
					</h2>
					<div>
						<p className="font-bold">
							Subscribe to YourTask newsletter to get updates on new posts.
						</p>
						<p className="text-xs">
							You will only receive an email when a new feature is coming. No
							spam. No ads.
						</p>
					</div>
					<div>
						<form onSubmit={handleSubscribe}>
							<div className="form-control w-full max-w-md mx-auto">
								<div className="join">
									<input
										type="email"
										name="email"
										className="join-item input lg:input-lg input-bordered w-full max-w-md"
										placeholder="Enter your email"
										required
									/>
									<button
										name="subscribe"
										className="join-item btn lg:btn-lg btn-neutral"
									>
										Subscribe
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
