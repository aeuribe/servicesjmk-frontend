import React from "react";
import AboutCard from "./AboutCard.jsx";
import { useTranslation } from "react-i18next";
import AboutData from "../data/AboutData.js";
import "../styles/About.css";

function AboutList() {
  const { t } = useTranslation();

  console.log("AboutData:", AboutData); // ✅ Verifica que `cards` existe
  console.log("Es un array?", Array.isArray(AboutData.cards)); // ✅ Debe imprimir `true`

  return (
    <div className="row">
      {AboutData.cards.map(({ id, titleKey, textKey, img }) => (
        <div className="col-md-4" key={id}>
          <AboutCard title={t(titleKey)} text={t(textKey)} imgSource={img} />
        </div>
      ))}
    </div>
  );
}

export default AboutList;
