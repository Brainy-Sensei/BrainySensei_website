import React from "react";
import "./css/TeamSection.css";

// Child component for rendering a single team member
const TeamCard = ({ name, role, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

// Main TeamSection component
const TeamSection = ({ teamMembers }) => {
  return (
    <div className="team-section">
      <h1>Team</h1>
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
