import React from "react";
import "./HeroSection.css";
import background from '../image/background.jpg'


 
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">We Are Here</p>
        <h1 className="hero-title">
          Empowering Businesses with  <br /> 
          Scalable and Secure Technology
        </h1>
        <button className="hero-button">View More</button>
      </div>
    </div>
  );
};

export default HeroSection;