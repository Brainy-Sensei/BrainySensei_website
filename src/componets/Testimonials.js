import React, { useState } from "react";
import "./Testimonials.css";
import Ellipse4 from "../image/Ellipse 4.png"; // Update with your image path
import Ellipse from "../image/Ellipse .png";  // Update with your image path

const testimonials = [
  {
    id: 1,
    name: "",
    role: "",
    image: "",
    text1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
  {
    id: 2,
    name: "Daria Linney",
    role: "CIO",
    image: Ellipse4,
    text: "  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
  {
    id: 3,
    name: "Samuel Karl",
    role: "CEO",
    image: Ellipse,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
];

const Testimonials = () => {
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
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === 1 ? "center-card" : "side-card"
            }`}
          >
            <div className="testimonial-content">
              <div className="testimonial-image-container">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                )}
              </div>
              <div className="testimonial-text-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-text1">{testimonial.text1}</p>
              </div>
              <div className="testimonial-name-role">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
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
