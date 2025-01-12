import React from "react";
import "./Process.css";

// Data array for the process steps
const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "Through research and analysis, we gather insights to craft a tailored software solution aligned with your goals.",
    icon: "🔍", // Replace with actual icons
  },
  {
    id: 2,
    title: "Design",
    description:
      "We design wireframes, prototypes for user-friendly, efficient, and scalable interfaces with functional integrity.",
    icon: "✏️", // Replace with actual icons
  },
  {
    id: 3,
    title: "Develop",
    description:
      "We write clean code using modern technologies and agile methods for scalable, secure, and high-performing software.",
    icon: "💻", // Replace with actual icons
  },
  {
    id: 4,
    title: "Test",
    description:
      "We rigorously test for bugs, performance, and security to ensure a seamless, high-quality experience.",
    icon: "✅", // Replace with actual icons
  },
];

const Process = () => {
  return (
    <section className="process">
      <h3 className="process-subtitle">Planning</h3>
      <h2 className="process-title">Our Process</h2>
      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.id} className="process-card">
            <div className="process-card-header">
              <span className="process-icon">{step.icon}</span>
              <span className="process-number">{`0${step.id}`}</span>
            </div>
            <div className="process-content">
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
