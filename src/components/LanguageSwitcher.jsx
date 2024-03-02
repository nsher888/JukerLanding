import { useTranslation } from "react-i18next";
import { EnIcon, KaIcon } from "@icons";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const currentLanguage = i18n.language;

	return (
		<div className="flex space-x-2">
			{currentLanguage !== "en" && (
				<button
					title="Change Language to English"
					onClick={() => changeLanguage("en")}
					className="px-4 py-2 bg-pink-600 rounded-md text-white font-semibold focus:outline-none hover:bg-pink-700">
					<EnIcon />
				</button>
			)}
			{currentLanguage !== "ka" && (
				<button
					title="Change Language to Georgian"
					onClick={() => changeLanguage("ka")}
					className="px-4 py-2 bg-pink-600 rounded-md text-white font-semibold focus:outline-none hover:bg-pink-700">
					<KaIcon />
				</button>
			)}
		</div>
	);
};

export default LanguageSwitcher;
