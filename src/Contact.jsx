import React from "react";
import "./Contact.css";
import {Divider} from "@nextui-org/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {

    return (
        <div className="contact-us">
            <h2 className="title">Contact Us</h2>
            <p className="text">Get in touch with us.</p>
            <div className="contact-info">
            <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@servicesjmk.com" className="contact-link">
                contact@servicesjmk.com
            </a>
            </div>
            {/* <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <a
                href="https://wa.me/17863158321"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
            >
                Chat with us.
            </a>
            </div> */}
        </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Contact;