import React from 'react';
import './AboutSection.css';
import team from '../image/team.png'
import team2 from '../image/team2.png'
 // Replace with the actual image path

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
        
          <img src={team2} alt="Team working in the office" className="about-img"/>
          <div className='about-img1'>
          <img src={team} alt="Team working in the office" />
          </div>
        </div>
        <div className="about-content">
          <h5 className="highlight-text">Who we are</h5>
          <h1 className="about-title">
            Innovative Software Solutions Tailored for Your Success
          </h1>
          <p className="about-description">
            We are a team of skilled professionals specializing in Software Development, AI, EdTech
            solutions, and LLMs and chatbots, all united by a common goal of ensuring customer
            satisfaction. Our focus is on delivering innovative and comprehensive web solutions that
            enhance your business through technology.
          </p>
          <button className="about-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
