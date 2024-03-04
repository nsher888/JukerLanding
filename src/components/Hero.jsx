import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<div className="flex items-center pt-20 md:pt-40  flex-wrap">
			<div className="flex-1 px-8 md:p-4 lg:p-0">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<h1 className="text-6xl md:text-8xl font-bold font-inter leading-tight bg-gradient-to-r text-transparent bg-clip-text from-white to-pink-700">
						Enjoy the music and connect with people.
					</h1>
					<p className="mt-3 font-inter text-gray-500  text-justify">
						Why settle for ordinary when you can elevate your
						experience? Introducing our online jukeboxes – the
						perfect way to curate your soundtrack at your favorite
						spots. Simply scan, select, and set the vibe
					</p>
					<div className="mt-10">
						<button className="bg-pink-700 hover:bg-pink-600 duration-300 text-white font-bold py-3 px-10 rounded-full">
							{t("DownloadNow")}
						</button>
					</div>
				</motion.div>
			</div>
			<div className="flex-1 pt-10 md:pt-0 justify-center flex md:justify-end md:mr-12">
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}>
					<div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
						<div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
						<div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
						<div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
						<div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
						<div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
							<img
								src="https://screenlane.com/media/screenshots/spotify-ios-app-screenshot-thumbnail-6112.jpg"
								alt="Screenshot"
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};
export default Hero;
