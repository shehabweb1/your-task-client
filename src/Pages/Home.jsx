import Banner from "../Component/Banner";
import NewsLetter from "../Component/NewsLetter";
import Pricing from "../Component/Pricing";
import Services from "../Component/Services";
import Team from "../Component/Team";
import useUser from "../CustomHooks/useUser";

const Home = () => {
	const { user } = useUser();
	console.log(user);
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
