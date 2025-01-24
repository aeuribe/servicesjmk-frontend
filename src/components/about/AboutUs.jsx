import React from "react";
import "./About.css";
import MedalIcon from "./assets/MedalIcon.jsx";
import GearIcon from "./assets/GearIcon.jsx";
import HandshakeIcon from "./assets/HandshakeIcon.jsx";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <p className="main-text">
        <span className="text-white">{t('aboutUs.paragraph-1')} </span>
        <span className="text-blue">{t('aboutUs.paragraph-2')}</span>
      </p>

      <div className="container">
        <div className="icon-container">
          <GearIcon className="icon"/>
          <div>
            <div className="title-icon-container">
              <h4>{t('aboutUs.whatWeDo-title')}</h4>
            </div>
            <p className="item-content">
              {t('aboutUs.whatWeDo-description')}
            </p>
          </div>
        </div>

        <div className="icon-container">
          <MedalIcon className="icon"/>
          <div>
            <div className="title-icon-container">
                <h4>
                  {t('aboutUs.ourExperience-title')}
                </h4>
            </div>
            <p className="item-content">
            {t('aboutUs.ourExperience-description')}
            </p>
          </div>
        </div>
        
        <div className="icon-container">
          <HandshakeIcon />
          <div>
            <div className="title-icon-container">
                <h4>
                  {t('aboutUs.ourCommitment-title')}
                </h4>
            </div>
            <p className="item-content">
              {t('aboutUs.ourCommitment-description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
