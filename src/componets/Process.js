import React from "react";
import "./css/Process.css";


const ProcessCard = ({ icon, id, title, description }) => {
  return (
    <div className="process-card">
      <div className="process-header">
        <div className="icon">{icon}</div>
        <div className="number">{id.toString().padStart(2, "0")}</div>
      </div>
      <div className="title">
        <h3>{title}</h3>
        <span className="underline"></span>
      </div>
      <p>{description}</p>
    </div>
  );
};


const Process = ({ steps }) => {
  return (
    <section className="process-section">
      <div className="heading-container">
        <h2 className="planning">Planning</h2>
        <h2 className="process">Our Process</h2>
      </div>
      <div className="process-container">
        {steps.map((step) => (
         
          <ProcessCard key={step.id} {...step} />
        ))}
      </div>
    </section>
  );
};

export default Process;
