import React from "react";
import "./Testimonials.css";
import Ellipse4 from "../image/Ellipse 4.png"
import Ellipse from "../image/Ellipse .png"

const Testimonials = () => {
  const testimonials = [
     {
         text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed."
     },
    {

      name: "Samual Karl",
      role: "CEO",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      image:  Ellipse4,
    },
    {
      name: "Daria Linney",
      role: "CEO",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      image:  Ellipse,
    },
    
     
    
  ];

  return (
    <div className="testimonials-container">
      <h2>From our Customers</h2>
      <h3>Testimonials</h3>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">{testimonial.text}</p>
            
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
