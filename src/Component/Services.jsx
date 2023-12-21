import SectionHeader from "./SectionHeader";
import { LuListTodo } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";

const Services = () => {
	return (
		<div className="py-10">
			<SectionHeader title="Services" subTitle="Explore Our Services" />
			<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-11/12 gap-10">
				<div className="card bg-primary text-primary-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">
							<LuListTodo className="text-6xl" />
							TO-DO
						</h2>
						<p>If you have a task, you can add here and change content</p>
					</div>
				</div>
				<div className="card  bg-secondary text-secondary-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">
							<MdManageAccounts className="text-6xl" />
							DOING
						</h2>
						<p>
							If you start doing your task, you can see here what you are doing
							and what the task content.
						</p>
					</div>
				</div>
				<div className="card  bg-success text-success-content">
					<div className="card-body">
						<h2 className="card-title text-2xl">
							<MdFileDownloadDone className="text-6xl" />
							COMPLETED
						</h2>
						<p>If done the task, you can see all completed task list here.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
