import React from "react";
import "./css/TeamSection.css";
import { teamData } from "../data/Data";



const TeamCard = ({ name, role, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};


const TeamSection = ({ teamMembers,   }) => {
  return (
    <div className="team-section">
      <h1>Team</h1>
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...teamMembers}
      
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;