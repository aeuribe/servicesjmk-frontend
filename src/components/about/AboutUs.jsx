import React from "react";
import "./About.css";
import MedalIcon from "./assets/MedalIcon.jsx";
import GearIcon from "./assets/GearIcon.jsx";
import HandshakeIcon from "./assets/HandshakeIcon.jsx";

function About() {

  return (
    <div className="about-us">
      <p className="main-text">
        <span className="text-white">We are a company specializing in the industrial production sector, </span>
        <span className="text-blue">offering a wide range of services to support and enhance our clients' operations.</span>
      </p>

      <div className="container">
        <div className="icon-container">
          <GearIcon className="icon"/>
          <div>
            <div className="title-icon-container">
              <h4>What We Do</h4>
            </div>
            <p className="item-content">
              Pre-project consultancy, equipment design and assembly, maintenance programs, and repairs for operational efficiency.
            </p>
          </div>
        </div>

        <div className="icon-container">
          <MedalIcon className="icon"/>
          <div>
            <div className="title-icon-container">
                <h4>Our Experience</h4>
            </div>
            <p className="item-content">
              With over 25 years of expertise, we deliver personalized, high-quality solutions for industrial maintenance and facility management.
            </p>
          </div>
        </div>
        
        <div className="icon-container">
          <HandshakeIcon />
          <div>
            <div className="title-icon-container">
                <h4>Our Commitment</h4>
            </div>
            <p className="item-content">
              Adapting to client-specific needs with precision, dedication, and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
