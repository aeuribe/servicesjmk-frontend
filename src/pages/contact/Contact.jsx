import "./styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ContactForm from "./components/ContactForm.jsx";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container-contact">
      <div className="contact-us">
        <p className="get-in-touch-text">{t("contactUs.getInTouch")}</p>
        <div className="contact-icon-link">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@servicesjmk.com" className="contact-link">
            contact@servicesjmk.com
          </a>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contact;
