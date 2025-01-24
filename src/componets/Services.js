import React from "react";
import "./Services.css";
import { FaLaptopCode, FaRobot, FaComments, FaBrain, FaUsers, FaGraduationCap } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "We offer software development across web, mobile, and desktop platforms, using tech stacks like MERN, MEAN, Python, Go, and frameworks like React Native and Flutter.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Generative AI",
      description:
        "We provide both custom AI model development and integration of existing AI models to meet diverse client needs.",
      icon: <FaRobot />,
    },
    {
      title: "LLM and Chatbot Development",
      description:
        "We create custom LLMs and AI chatbots tailored to your business, improving customer service, automating tasks, and delivering personalized solutions.",
      icon: <FaComments />,
    },
    {
      title: "AI Customization",
      description:
        "Train AI models on client data for high accuracy, and develop chatbots for brand-consistent customer interactions. Use LLMs to automate tasks and deliver industry-specific expertise.",
      icon: <FaBrain />,
    },
    {
      title: "Tech Team as a Service",
      description:
        "We build and manage tech teams, offering flexible models for temporary, permanent, or full-service departments, handling recruitment, onboarding, and maintenance.",
      icon: <FaUsers />,
    },
    {
      title: "EduTech Solution",
      description:
        "We provide customized curricula, session-wise assignments, professional course videos, and complete EdTech setup, including LMS integration and platform deployment.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="services-container">
      <h2>Services</h2>
      <h3>Our Services</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <a href="#">Learn more...</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;