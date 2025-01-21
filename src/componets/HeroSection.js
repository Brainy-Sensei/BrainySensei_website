import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, underline }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">{subtitle}</p>
        <h1 className={`hero-title ${underline ? "underline" : ""}`}>
          {title}
        </h1>
        <button className="hero-button">View More</button>
      </div>
    </section>
  );
};

export default HeroSection;
