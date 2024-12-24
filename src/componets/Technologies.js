import React from "react";
import "./Technologies.css";
import { FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaVuejs, FaWordpress, FaFigma } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiMagento, SiFirebase, SiPostgresql, SiMongodb, SiElasticsearch, SiMysql, SiOracle, SiSqlite } from "react-icons/si";

const Technologies = () => {
  const expertise = [
    {
      category: "Language",
      items: [
        { name: "Javascript", icon: <FaJs /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "HTML", icon: <FaHtml5 /> },
      ],
    },
    {
      category: "Framework",
      items: [
        { name: "AngularJS", icon: <FaAngular /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Magento", icon: <SiMagento /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Vue JS", icon: <FaVuejs /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Elasticsearch", icon: <SiElasticsearch /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "SQL", icon: <SiSqlite /> },
      ],
    },
  ];

  return (
    <div className="technologies-container">
      <h2>Technologies</h2>
      <h3>Our Expertise</h3>
      {expertise.map((category) => (
        <div key={category.category} className="category">
          <h4>{category.category}</h4>
          <div className="icons-grid">
            {category.items.map((item) => (
              <div key={item.name} className="icon-item">
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
