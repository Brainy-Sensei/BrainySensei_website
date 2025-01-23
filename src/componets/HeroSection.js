import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, buttonText, backgroundImage }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">{subtitle}</p>
        <h1 className="hero-title">{title}</h1>
        <button className="hero-button">{buttonText}</button>
      </div>
    </section>
  );
};

export default HeroSection;
