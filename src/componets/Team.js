import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Abhishek Shankar",
      role: "Founder",
      image: "path-to-image-1.jpg", // Replace with actual image paths
    },
    {
      name: "Shweta Srivastava",
      role: "UI/UX Designer",
      image: "path-to-image-2.jpg",
    },
    {
      name: "Dhaniri Pandey",
      role: "Software Developer",
      image: "path-to-image-3.jpg",
    },
    {
      name: "Pooja Dhaker",
      role: "Software Developer",
      image: "path-to-image-4.jpg",
    },
  ];

  return (
    <div className="team-section">
      <h1>Team</h1>
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
