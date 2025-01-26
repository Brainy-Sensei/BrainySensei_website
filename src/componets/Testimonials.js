import React, { useState } from "react";
import "./css/Testimonials.css";

const TestimonialCard = ({ name, role, image, text, text1 }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <div className="testimonial-image-container">
        {image && <img src={image} alt={name} className="testimonial-image" />}
      </div>
      <div className="testimonial-text-content">
        {text && <p className="testimonial-text">{text}</p>}
        {text1 && <p className="testimonial-text1">{text1}</p>}
      </div>
      <div className="testimonial-name-role">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-role">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-header">From our Customers</h2>
      <h3 className="testimonials-subheader">Testimonials</h3>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial} // Spread operator to pass all properties as props
          />
        ))}
      </div>
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
