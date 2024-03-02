import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<div className="flex items-center pt-40">
			<div className="flex-1">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<h1 className="text-8xl font-bold font-inter leading-tight bg-gradient-to-r text-transparent bg-clip-text from-white to-pink-700">
						Enjoy the music and connect with people.
					</h1>
					<p className="mt-5 font-inter text-gray-500  text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam consectetur sequi facere commodi quae sint
						itaque excepturi? Libero repudiandae dolore vel itaque
						soluta sapiente a veritatis nobis?
					</p>
					<div className="mt-10">
						<button className="bg-pink-700 hover:bg-pink-600 duration-300 text-white font-bold py-3 px-10 rounded-full">
							{t("DownloadNow")}
						</button>
					</div>
				</motion.div>
			</div>
			<div className="flex-1 flex justify-end mr-10">
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
