import React from 'react';
import './ProductDescription.css';

const ProductDescription = ({
  imageSrc,
  subtitle,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={imageSrc} alt="Product banner" />
      </div>
      <div className="product-content">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="view-more-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ProductDescription;
