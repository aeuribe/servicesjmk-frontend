import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {Form, Input, Button, Textarea} from "@heroui/react";
import { sendForm } from "../../services/mailsenderService.js"
import { useTranslation } from "react-i18next";


function Contact() {
    const [submitted, setSubmitted] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { t } = useTranslation();

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget)); // Convertir FormData a objeto JSON

        setLoading(true);
        
        setError(null);

        sendForm(data)
            .then((response) => {
                setSubmitted(response);
            })
            .catch((error) => {
                setError(error.errorMessage);
                alert("Hubo un error al enviar el formulario", error);
                console.log(error)
            })
            .finally( () => {
                setLoading(false);
            })
    };

    const formStyle ={
        alignItems: 'normal',
        // marginTop:'25vh'
    }

    const buttonStyle ={
    }
    return (
        <div className="container-contact">

            <div className="contact-us">                
                <p className="get-in-touch-text">
                    {t("contactUs.getInTouch")}
                </p>
                    <div className="contact-icon-link">
                        <FaEnvelope className="contact-icon" />
                        <a href="mailto:info@servicesjmk.com" className="contact-link">
                            contact@servicesjmk.com
                        </a>
                    </div>
            </div>

            <div className="formulario">
                <h2 className="form-title">
                    <span>{t("contactUs.form-title-1")}</span>
                    <span className="contact-us-yellow-text">{t("contactUs.form-title-2")}</span>
                
                </h2>
                <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit} style={formStyle}>
                    <div className="all-input-container">
                        <div className="input-names">
                            <Input
                                isRequired
                                errorMessage={t('contactUs.Form.ErrorMessage.name')}
                                labelPlacement="outside"
                                name="first_name"
                                placeholder={t('contactUs.Form.first-name')}
                                type="string"
                                className="input"
                            />
                            <Input
                                isRequired
                                errorMessage={t('contactUs.Form.ErrorMessage.last-name')}
                                labelPlacement="outside"
                                name="last_name"
                                placeholder={t('contactUs.Form.last-name')}
                                type="string"
                                className="input"
                            />
                        </div>
                        <Input
                                isRequired
                                errorMessage={t('contactUs.Form.ErrorMessage.email')}
                                labelPlacement="outside"
                                name="email"
                                placeholder={t('contactUs.Form.email')}
                                type="email"
                                className="input"
                            />
                        <Textarea 
                            isRequired
                            errorMessage={t('contactUs.Form.ErrorMessage.message')}
                            className="max-w-xs input-text-area"  
                            name="message"
                            placeholder={t('contactUs.Form.message')} 
                        />
                    </div>

                        <Button 
                            type="submit" 
                            variant="solid" 
                            color={submitted ? "success" : "primary"}
                            style={buttonStyle}
                            isLoading={loading}
                            disabled={loading || submitted}
                            name="button-submit"
                        >

                            {loading ? t('contactUs.Form.loading') : submitted ? t('contactUs.Form.submitted') : t('contactUs.Form.submit')}
                        </Button>

                </Form>
            </div>
        </div>
    )
}

export default Contact;


