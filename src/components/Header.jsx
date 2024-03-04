import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@components";

const Header = () => {
	const { t } = useTranslation();
	return (
		<header className="flex justify-between items-center px-6 md:px-0">
			<h1 className="text-3xl font-inter font-bold">Juker</h1>
			<nav className="flex">
				<ul className="flex items-center justify-between gap-3 sm:gap-4 md:gap-10 md:text-xl">
					<li>
						<Link
							className="hover:text-pink-700 duration-300"
							to="/">
							{t("Home")}
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-pink-700 duration-300"
							to="/contact">
							{t("Contact")}
						</Link>
					</li>
					<LanguageSwitcher />
				</ul>
			</nav>
		</header>
	);
};
export default Header;
