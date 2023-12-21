import SectionHeader from "./SectionHeader";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
	const includedFeatures = [
		"Access Task Management System",
		"Email your tasks notification",
		"Private forum access",
		"Member resources",
	];
	return (
		<div className="py-10">
			<SectionHeader title="Pricing" subTitle="Our Pricing in the service" />
			<div className="mx-auto px-6 lg:px-8">
				<div className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
					<div className="p-8 sm:p-10 lg:flex-auto">
						<h3 className="text-2xl font-bold tracking-tight text-gray-900">
							Lifetime membership
						</h3>
						<p className="mt-6 text-base leading-7 text-gray-600"></p>
						<div className="mt-10 flex items-center gap-x-4">
							<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
								What’s included
							</h4>
							<div className="h-px flex-auto bg-gray-100" />
						</div>
						<ul
							role="list"
							className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
						>
							{includedFeatures.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<FaCheck
										className="h-6 w-5 flex-none text-indigo-600"
										aria-hidden="true"
									/>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
						<div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
							<div className="mx-auto max-w-xs px-8">
								<p className="text-base font-semibold text-gray-600">
									Pay once, own it forever
								</p>
								<p className="mt-6 flex items-baseline justify-center gap-x-2">
									<span className="text-5xl font-bold tracking-tight text-gray-900">
										$50
									</span>
									<span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
										USD
									</span>
								</p>
								<button className="mt-10 btn btn-neutral">Get access</button>
								<p className="mt-6 text-xs leading-5 text-gray-600">
									Invoices and receipts available for easy company reimbursement
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
