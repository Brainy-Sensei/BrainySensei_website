import React from 'react';
import './ProductDescription.css';
import banner from "../image/bannerImage.png"

const ProductDescription = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={banner} alt="Team working" />
      </div>
      <div className="product-content">
        <h4>What We Do</h4>
        <h2>We Develop Products That People Love to Use.</h2>
        <p>
          We are a team of skilled professionals specializing in Software Development, AI, EdTech solutions, and LLMs and chatbots, all united by a common goal of ensuring customer satisfaction. Our focus is on delivering innovative and comprehensive web solutions that enhance your business through technology.
        </p>
        <button className="view-more-button">View More</button>
      </div>
    </div>
  );
};

export default ProductDescription;
