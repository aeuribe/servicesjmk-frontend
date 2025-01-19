import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {Form, Input, Button, Textarea} from "@heroui/react";


function Contact() {
    const [submitted, setSubmitted] = React.useState(null);

    const onSubmit = (e) => {
      e.preventDefault();
  
      const data = Object.fromEntries(new FormData(e.currentTarget));
  
      setSubmitted(data);
    };

    const formStyle ={
        alignItems: 'normal',
        marginTop:'25vh'
    }

    const buttonStyle ={
    }
    return (
        <div className="container-contact">
            <div className="contact-us">
                <h2 className="contact-us-title">Contact Us</h2>
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

            </div>
            <div className="formulario">
                <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit} style={formStyle}>
                    <div className="input-names">
                        <Input
                            isRequired
                            errorMessage="Please enter a valid first name"
                            labelPlacement="outside"
                            name="first name"
                            placeholder="First Name"
                            type="string"
                            className="input"
                        />
                        <Input
                            isRequired
                            errorMessage="Please enter a valid last name"
                            labelPlacement="outside"
                            name="Last Name"
                            placeholder="Last Name"
                            type="string"
                            className="input"
                        />
                    </div>
                    <Input
                            isRequired
                            errorMessage="Please enter a valid last email"
                            labelPlacement="outside"
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="input"
                        />
                    <Textarea 
                        isRequired
                        className="max-w-xs input-text-area"  
                        placeholder="Enter your message" 
                    />;
                    <Button type="submit" variant="solid" color="primary" style={buttonStyle}>
                        Submit
                    </Button>
                    {submitted && (
                        <div className="text-small text-default-500">
                        You submitted: <code>{JSON.stringify(submitted)}</code>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    )
}

export default Contact;


