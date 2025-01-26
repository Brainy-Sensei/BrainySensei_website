import React from "react";
import "./css/Technologies.css";

const Technologies = ({ data }) => {
  return (
    <div className="technologies-container">
      <h2 className="tech">Technologies</h2>
      <h3>Our Expertise</h3>
      {data.map(({ category, items }, index) => (
        <div key={index} className="category">
          <h4>{category}</h4>
          <div className="icons-grid">
            {items.map(({ name, icon }, idx) => (
              <div key={idx} className="icon-item">
                {icon}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
