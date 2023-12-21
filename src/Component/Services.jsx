import SectionHeader from "./SectionHeader";

const Services = () => {
	return (
		<div className="py-10">
			<SectionHeader title="Services" subTitle="Explore Our Services" />
			<div className="grid grid-cols-1 lg:grid-cols-3">
				<div className="card w-96 bg-primary text-primary-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">TO-DO</h2>
						<p>If you have a task, you can add here and change content</p>
						<div className="card-actions justify-end">
							<button className="btn">Explore</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-secondary text-secondary-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">DOING</h2>
						<p>
							If you start doing your task, you can see here what you are doing
							and what the task content.
						</p>
						<div className="card-actions justify-end">
							<button className="btn">Explore</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-success text-success-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">COMPLETED</h2>
						<p>
							If done the task, you can see all completed task list here and
							explore completed task list.
						</p>
						<div className="card-actions justify-end">
							<button className="btn">Explore</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
