import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">We Are Here</p>
        <h1 className="hero-title">
          Empowering Businesses with <br />
          Scalable and Secure Technology
        </h1>
        <button className="hero-button">View More</button>
      </div>
    </section>
  );
};

export default HeroSection;
