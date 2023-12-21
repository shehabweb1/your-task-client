const SectionHeader = ({ title, subTitle }) => {
	return (
		<div className="pb-10 text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			<h3 className="text-xl font-semibold mt-3">{subTitle}</h3>
		</div>
	);
};

export default SectionHeader;
