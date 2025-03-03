import React from "react";
import "./styles/About.css";
import AboutList from "./components/AboutList.jsx";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <p className="main-text">
        <span className="text-white">{t("aboutUs.paragraph-1")} </span>
        <span className="text-blue">{t("aboutUs.paragraph-2")}</span>
      </p>

      <AboutList />
    </div>
  );
}

export default About;
