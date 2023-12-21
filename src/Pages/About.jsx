import { Helmet } from "react-helmet";

const About = () => {
	return (
		<>
			<Helmet>
				<title>YourTask | About Us</title>
			</Helmet>
			<div className="w-10/12 mx-auto">
				<div className="py-10">
					<h1 className="text-3xl font-bold text-center mb-5">Our Journey:</h1>
					<p className="text-lg">
						Welcome to YourTask – where productivity meets simplicity. Our
						journey began with a vision to revolutionize task management,
						providing users with an intuitive and efficient platform to enhance
						their productivity. Heres a glimpse into our story:
					</p>
					<h3 className="text-2xl font-semibold pt-8">Inception:</h3>
					<p className="text-lg">
						YourTask was born out of a shared frustration with complex and
						convoluted task management tools. We believed there had to be a
						better way – a platform that seamlessly integrates into your
						workflow and adapts to your unique needs.
					</p>
					<h3 className="text-2xl font-semibold pt-8">
						Passion for Productivity:
					</h3>
					<p className="text-lg">
						Driven by a passion for productivity, our team of dedicated
						individuals set out to create a task management solution that goes
						beyond the ordinary. We poured countless hours into research,
						design, and development, always keeping user experience at the
						forefront.
					</p>
					<h3 className="text-2xl font-semibold pt-8">
						Iterative Development:
					</h3>
					<p className="text-lg">
						The journey was not without its challenges. We embraced feedback,
						learned from each iteration, and continually refined YourTask to
						ensure it meets the evolving demands of our diverse user base. Your
						success is our motivation, and we are committed to making task
						management a breeze for everyone.
					</p>
				</div>

				<div className="py-10">
					<h1 className="text-3xl font-bold text-center mb-5">Our Features:</h1>
					<p className="text-lg">
						Discover the features that set YourTask apart and empower users to
						take control of their tasks and projects. We have meticulously
						crafted a set of tools to make task management intuitive, efficient,
						and even enjoyable.
					</p>
					<h3 className="text-2xl font-semibold pt-8">
						Intuitive Task Creation:
					</h3>
					<p className="text-lg">
						Easily create tasks with our user-friendly interface. Specify
						titles, descriptions, deadlines, and priority levels with just a few
						clicks. YourTask empowers you to capture ideas swiftly and turn them
						into actionable items.
					</p>
					<h3 className="text-2xl font-semibold pt-8">
						Seamless Task Organization:
					</h3>
					<p className="text-lg">
						Effortlessly organize your tasks into three distinct lists – To-Do,
						Ongoing, and Completed. Our drag-and-drop functionality allows you
						to manage tasks with unparalleled ease, adapting to your workflow
						seamlessly.
					</p>
					<h3 className="text-2xl font-semibold pt-8">
						Collaborative Environment:
					</h3>
					<p className="text-lg">
						YourTask fosters collaboration with built-in features that allow
						teams to work together effortlessly. Delegate tasks, track progress,
						and celebrate achievements in a unified workspace.
					</p>
					<h3 className="text-2xl font-semibold pt-8">Smart Notifications:</h3>
					<p className="text-lg">
						Stay on top of your tasks with smart notifications. Receive updates
						on task assignments, deadlines, and important changes, ensuring you
						never miss a beat.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
