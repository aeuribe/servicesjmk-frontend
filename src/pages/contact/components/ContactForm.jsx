import React, { useState } from "react";
import "../styles/Contact.css";
import { Form, Input, Button, Textarea } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../hooks/useContactForm.js";

function ContactForm() {
  const { submitted, loading, onSubmit } = useContactForm();
  const { t } = useTranslation();

  const formStyle = {
    alignItems: "normal",
    // marginTop:'25vh'
  };
  const buttonStyle = {};

  return (
    <div className="formulario">
      <h2 className="form-title">
        <span>{t("contactUs.form-title-1")}</span>
        <span className="contact-us-yellow-text">
          {t("contactUs.form-title-2")}
        </span>
      </h2>
      <Form
        className="w-full max-w-xs"
        validationBehavior="native"
        onSubmit={onSubmit}
        style={formStyle}
      >
        <div className="all-input-container">
          <div className="input-names">
            <Input
              isRequired
              errorMessage={t("contactUs.Form.ErrorMessage.name")}
              labelPlacement="outside"
              name="first_name"
              placeholder={t("contactUs.Form.first-name")}
              type="string"
              className="input"
            />
            <Input
              isRequired
              errorMessage={t("contactUs.Form.ErrorMessage.last-name")}
              labelPlacement="outside"
              name="last_name"
              placeholder={t("contactUs.Form.last-name")}
              type="string"
              className="input"
            />
          </div>
          <Input
            isRequired
            errorMessage={t("contactUs.Form.ErrorMessage.email")}
            labelPlacement="outside"
            name="email"
            placeholder={t("contactUs.Form.email")}
            type="email"
            className="input"
          />
          <Textarea
            isRequired
            errorMessage={t("contactUs.Form.ErrorMessage.message")}
            className="max-w-xs input-text-area"
            name="message"
            placeholder={t("contactUs.Form.message")}
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
          {loading
            ? t("contactUs.Form.loading")
            : submitted
            ? t("contactUs.Form.submitted")
            : t("contactUs.Form.submit")}
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
