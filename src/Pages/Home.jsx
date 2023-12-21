import Banner from "../Component/Banner";
import NewsLetter from "../Component/NewsLetter";
import Pricing from "../Component/Pricing";
import Services from "../Component/Services";
import Team from "../Component/Team";

const Home = () => {
	return (
		<>
			<Banner />
			<Services />
			<Pricing />
			<NewsLetter />
			<Team />
		</>
	);
};

export default Home;
