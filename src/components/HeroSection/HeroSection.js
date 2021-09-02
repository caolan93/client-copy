import React from "react";
import "./styles.css";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection_welcome">
        <div className="welcome_container">
          <h1 className="herosection_title">LOREM IPSUM</h1>
          <h1 className="herosection_title">DUMMY TEXT</h1>
          <h3 className="herosection_subtitle">LOREM IPSUM IS SIMPY</h3>
          <h3 className="herosection_subtitle">DUMMY TEXT</h3>
        </div>
        <button className="btn">READ MORE</button>
      </div>
    </div>
  );
};

export default HeroSection;
