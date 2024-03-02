import { Header, Hero } from "@components";
import { useDocumentTitle } from "@hooks";

const Home = ({ title }) => {
	useDocumentTitle(title);
	return (
		<div className="bg-black min-h-screen w-full text-white">
			<div className="container mx-auto py-10">
				<Header />
				<Hero />
			</div>
		</div>
	);
};

export default Home;
