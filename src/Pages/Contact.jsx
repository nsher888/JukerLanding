import { Header } from "@components";
import { motion } from "framer-motion";
import { useDocumentTitle } from "@hooks";
import { useTranslation } from "react-i18next";

const Contact = ({ title }) => {
	useDocumentTitle(title);
	const { t } = useTranslation();
	return (
		<div>
			<div className="bg-black min-h-screen w-full text-white">
				<div className="container mx-auto py-6 md:py-10">
					<Header />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}>
						<div className="py-16 bg-black text-white">
							<div className="max-w-6xl mx-auto px-4">
								<h2 className="text-4xl font-bold text-center mb-12">
									{t("ContactUs")}
								</h2>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
									<div>
										<h3 className="text-2xl font-semibold mb-4">
											{t("SendMessage")}
										</h3>
										<form className="space-y-6">
											<div>
												<label
													htmlFor="name"
													className="block mb-1 text-pink-600">
													{t("Name")}
												</label>
												<input
													type="text"
													id="name"
													name="name"
													className="w-full border border-pink-600 rounded-md px-4 py-2 focus:outline-none text-black"
													placeholder={t(
														"EnterYourName"
													)}
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block mb-1 text-pink-600">
													{t("Email")}
												</label>
												<input
													type="email"
													id="email"
													name="email"
													className="w-full border border-pink-600 rounded-md px-4 py-2 focus:outline-none text-black"
													placeholder={t(
														"EnterYourEmail"
													)}
												/>
											</div>
											<div>
												<label
													htmlFor="message"
													className="block mb-1 text-pink-600">
													{t("Message")}
												</label>
												<textarea
													id="message"
													name="message"
													rows="5"
													className="w-full border border-pink-600 rounded-md px-4 py-2 focus:outline-none text-black"
													placeholder={t(
														"EnterYourMessage"
													)}></textarea>
											</div>
											<button
												type="submit"
												className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition duration-300">
												{t("SendMessage")}
											</button>
										</form>
									</div>
									<div>
										<h3 className="text-2xl font-semibold mb-4">
											{t("ContactInformation")}
										</h3>
										<p className="mb-2">
											<strong>{t("Address")}:</strong>{" "}
											University Street 24, Tbilisi
										</p>
										<p className="mb-2">
											<strong>{t("Phone")}:</strong> +666
											666 666
										</p>
										<p className="mb-2">
											<strong>Email:</strong>{" "}
											info@juker.ge
										</p>
										<div className="h-80 bg-gray-700 rounded-md overflow-hidden">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.078468504716!2d44.71587152443802!3d41.717132255161815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473e77d5c1a5b%3A0x1d9707c331205a02!2sTerminal%20University!5e0!3m2!1sen!2sge!4v1709396239552!5m2!1sen!2sge"
												width="540"
												height="320"
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
