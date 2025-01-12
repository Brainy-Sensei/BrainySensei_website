import React from "react";
import "./OverlapSection.css";
import image from "../image/image.png";
import image1 from "../image/image1.png";


const OverlapSection = () => {
  return (
    <section className="overlap-section">
      <div className="image-container">
        <div className="overlapping-images">
          <img
            src={image}
            alt="Main"
            className="main-image"
          />
          <img
            src={image1}
            alt="Overlap"
            className="overlap-image"
          />
        </div>
      </div>
      <div className="content-container">
        <h2>Who we are</h2>
        <h1>Innovative Software Solutions Tailored for Your Success</h1>
        <p>
           We are a team of skilled professionals specializing in 
           Software Development, AI, EdTech solutions, and LLMs and
           chatbots, all united by a common goal of ensuring customer 
           satisfaction. Our focus is on delivering innovative and 
           comprehensive web solutions that enhance your business
           through technology.
        </p>
        <button className="cta-button">View More</button>
      </div>
    </section>
  );
};

export default OverlapSection;
