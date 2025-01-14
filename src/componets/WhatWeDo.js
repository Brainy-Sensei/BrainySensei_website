// src/components/WhatWeDo.js
import React from 'react';
import './WhatWeDo.css';
import banner from "../image/bannerImage.png"

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <div className="image-section">
        <img className="square-image" src={banner} alt="Team working" />
      </div>
      <div className="text-section">
        <h2>What We Do</h2>
        <h1>We Develop Products That People Love to Use.</h1>
        <p>
          We are a team of skilled professionals specializing in Software
          Development, AI, EdTech solutions, LLMs, and chatbots, all united by a common goal of ensuring customer satisfaction. Our
          focus is on delivering innovative and comprehensive web solutions
          that enhance your business through technology.
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default WhatWeDo;
