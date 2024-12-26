import React from "react";
import "./TeamSection.css";
import AbhishekShankar from "../image/abhishek-shankar.jpg";
import ShwetaSrivastava from "../image/shweta-srivastava.jpg";
import DhariniPandey from "../image/dharini-panday.jpg";
import PoojaDhaker from "../image/pooja-dhaker.jpg";



const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abhishek Shankar",
      role: "Founder",
      image: AbhishekShankar , // Replace with actual image paths
    },
    {
      name: "Shweta Srivastava",
      role: "UI/UX Designer",
      image: ShwetaSrivastava,
    },
    {
      name: "Dharini Pandey",
      role: "Software Developer",
      image: DhariniPandey,
    },
    {
      name: "Pooja Dhaker",
      role: "Software Developer",
      image: PoojaDhaker ,
    },
  ];

  return (
    <div className="team-section">
      <h1>Team</h1>
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
