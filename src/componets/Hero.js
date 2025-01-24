import React from "react";
import "./Hero.css";

const Hero = ({ styleProps, ...props }) => {
  return (
    <div
      className="hero-section"
      style={{
        ...styleProps, // Spread dynamic styles for background
      }}
    >
      <div className="hero-content">
        <span className="hero-subtitle">{props.subtitle}</span>
        <h1 className="hero-title">{props.title}</h1>
        <button className="hero-button" onClick={props.onButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
