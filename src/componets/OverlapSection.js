import React from "react";
import "./OverlapSection.css";

const OverlapSection = (props) => {
  
  const {
    mainImage,
    overlapImage,
    subtitle,
    title,
    description,
    buttonLabel,
  } = { ...props };

  return (
    <section className="overlap-section">
      <div className="image-container">
        <div className="overlapping-images">
          <img
            src={mainImage}
            alt="Main workspace"
            className="main-image"
          />
          <img
            src={overlapImage}
            alt="Overlapping workspace"
            className="overlap-image"
          />
        </div>
      </div>
      <div className="content-container">
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="cta-button">{buttonLabel}</button>
      </div>
    </section>
  );
};

export default OverlapSection;
