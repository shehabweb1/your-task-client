const Team = () => {
	const people = [
		{
			name: "Leslie Alexander",
			role: "Co-Founder / CEO",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			name: "Shehab Hossen",
			role: "MERN Stack Developer",
			imageUrl: "https://avatars.githubusercontent.com/u/102960395",
		},
		{
			name: "Shsir Ahmed",
			role: "Marketing Manager",
			imageUrl:
				"https://images.pexels.com/photos/17136147/pexels-photo-17136147/free-photo-of-indian-traditional-beard-man.jpeg",
		},
		{
			name: "Joelson Melo",
			role: "Product Development Head",
			imageUrl:
				"https://images.pexels.com/photos/16881939/pexels-photo-16881939/free-photo-of-a-man-in-a-plaid-shirt-and-a-black-background.jpeg",
		},
	];
	return (
		<div>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Meet our leadership
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
							vitae elementum enim vitae ullamcorper suspendisse.
						</p>
					</div>
					<ul
						role="list"
						className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
					>
						{people.map((person) => (
							<li key={person.name}>
								<div className="flex items-center gap-x-6">
									<img
										className="h-16 w-16 rounded-full"
										src={person.imageUrl}
										alt=""
									/>
									<div>
										<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
											{person.name}
										</h3>
										<p className="text-sm font-semibold leading-6 text-indigo-600">
											{person.role}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Team;
