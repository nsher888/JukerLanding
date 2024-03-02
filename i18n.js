import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				Home: "Home",
				Contact: "Contact",
				Name: "Name",
				Email: "Email",
				Message: "Message",
				SendMessage: "Send Message",
				EnterYourName: "Enter your name",
				EnterYourEmail: "Enter your email",
				EnterYourMessage: "Enter your message",
				ContactInformation: "Contact Information",
				Address: "Address",
				Phone: "Phone",
				ContactUs: "Contact Us",
				DownloadNow: "Download Now",
			},
		},
		ka: {
			translation: {
				Home: "მთავარი",
				Contact: "კონტაქტი",
				Name: "სახელი",
				Email: "ელ-ფოსტა",
				Message: "შეტყობინება",
				SendMessage: "შეტყობინების გაგზავნა",
				EnterYourName: "შეიყვანეთ სახელი",
				EnterYourEmail: "შეიყვანეთ ელ-ფოსტა",
				EnterYourMessage: "შეიყვანეთ შეტყობინება",
				ContactInformation: "საკონტაქტო ინფორმაცია",
				Address: "მისამართი",
				Phone: "ტელეფონი",
				ContactUs: "დაგვიკავშირდით",
				DownloadNow: "ჩამოტვირთე",
			},
		},
	},
	lng: "en",
	fallbackLng: "en",
	debag: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
