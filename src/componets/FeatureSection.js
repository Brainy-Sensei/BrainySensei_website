import React from 'react';
import './FeatureSection.css';
import teamImage from "../image/teamImage.png"

const FeatureSection = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="feature-image">
          <img
            src={teamImage} /* Replace with your image URL */
            alt="Team Collaboration"
          />
        </div>
        <div className="feature-text">
          <h4 className="feature-subtitle">What We Do</h4>
          <h2 className="feature-title">
            We Develop Products That <br /> People Love to Use.
          </h2>
          <p className="feature-description">
            We are a team of skilled professionals specializing in Software Development, AI,
            EdTech solutions, and LLMs and chatbots, all united by a common goal of ensuring
            customer satisfaction. Our focus is on delivering innovative and comprehensive web
            solutions that enhance your business through technology.
          </p>
          <button className="feature-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
