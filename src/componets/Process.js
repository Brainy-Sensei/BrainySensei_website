import React from "react";
import "./Process.css";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Research",
      description:
        "Through research and analysis, we gather insights to craft a tailored software solution aligned with your goals.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Design",
      description:
        "We design wireframes, prototypes for user-friendly, efficient, and scalable interfaces with functional integrity.",
      icon: "✏️",
    },
    {
      id: 3,
      title: "Develop",
      description:
        "We write clean code using modern technologies and agile methods for scalable, secure, and high-performing software.",
      icon: "💻",
    },
    {
      id: 4,
      title: "Test",
      description:
        "We rigorously test for bugs, performance, and security to ensure a seamless, high-quality experience.",
      icon: "🧪",
    },
  ];

  return (
    <section className="process-section">
      <div className="heading-container">
        <h2 className="planning">Planning</h2>
        <h2 className="process">Our Process</h2>
      </div>
      <div className="process-container">
        {steps.map((step) => (
          <div key={step.id} className="process-card">
            <div className="process-header">
              <div className="icon">{step.icon}</div>
              <div className="number">{step.id.toString().padStart(2, "0")}</div>
            </div>
            <div className="title">
              <h3>{step.title}</h3>
              <span className="underline"></span>
            </div>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
