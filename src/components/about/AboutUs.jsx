import React from "react";
import "./About.css";

import AboutCard from "./AboutCard.jsx"
import { useTranslation } from "react-i18next";
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <p className="main-text">
        <span className="text-white">{t('aboutUs.paragraph-1')} </span>
        <span className="text-blue">{t('aboutUs.paragraph-2')}</span>
      </p>

      <div className="row">
        <div className="col-md-4">
          <AboutCard
            title={t('aboutUs.whatWeDo-title')}
            imgSource={image1}
            text={t('aboutUs.whatWeDo-description')}
          />
        </div>  
        <div className="col-md-4">
          <AboutCard
            title={t('aboutUs.ourExperience-title')}
            imgSource={image2}
            text={t('aboutUs.ourExperience-description')}
          />
        </div>
        <div className="col-md-4">
          <AboutCard
            title={t('aboutUs.ourCommitment-title')}
            imgSource={image3}
            text={t('aboutUs.ourCommitment-description')}
          />  
        </div>
                    
      </div>
  
    </div>
  );
}

export default About;
