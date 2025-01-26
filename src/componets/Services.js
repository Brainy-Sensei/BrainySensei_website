import React from "react";
import "./css/Services.css";

// Child component to render a single service
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="#">Learn more...</a>
    </div>
  );
};

// Main Services component
const Services = ({ services }) => {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <h3>Our Services</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
