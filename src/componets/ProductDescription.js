import React from "react";
import "./css/ProductDescription.css";

const ProductDescription = ({ imageSrc1, subtitle1, title1, description1, buttonText1 }) => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={imageSrc1} alt="Product banner" />
      </div>
      <div className="product-content">
        <h4>{subtitle1}</h4>
        <h2>{title1}</h2>
        <p>{description1}</p>
        <button className="view-more-button">{buttonText1}</button>
      </div>
    </div>
  );
};

export default ProductDescription;
