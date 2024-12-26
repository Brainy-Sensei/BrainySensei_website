import React from "react";
import "./Technologies.css";
import { FaJs, FaJava, FaPython, FaPhp, FaCss3Alt, FaHtml5, FaAngular, FaReact, FaVuejs, FaWordpress, FaFigma, FaDatabase } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiMagento, SiPostgresql, SiMongodb, SiMysql, SiOracle, SiFirebase, SiElasticsearch, SiSqlite } from "react-icons/si";

const Technologies = () => {
  const data = [
    {
      category: "Language",
      items: [
        { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} /> },
        { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
        { name: "Kotlin", icon: <SiKotlin style={{ color: "#7f52ff" }} /> },
        { name: "Python", icon: <FaPython style={{ color: "#3776ab" }} /> },
        { name: "PHP", icon: <FaPhp style={{ color: "#8993be" }} /> },
        { name: "CSS", icon: <FaCss3Alt style={{ color: "#264de4" }} /> },
        { name: "HTML", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
      ],
    },
    {
      category: "Framework",
      items: [
        { name: "Angular", icon: <FaAngular style={{ color: "#dd1b16" }} /> },
        { name: "Flutter", icon: <SiFlutter style={{ color: "#02569b" }} /> },
        { name: "Magento", icon: <SiMagento style={{ color: "#ee672f" }} /> },
        { name: "React JS", icon: <FaReact style={{ color: "#61dafb" }} /> },
        { name: "Vue JS", icon: <FaVuejs style={{ color: "#42b883" }} /> },
        { name: "WordPress", icon: <FaWordpress style={{ color: "#21759b" }} /> },
        { name: "Figma", icon: <FaFigma style={{ color: "#a259ff" }} /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "Firebase", icon: <SiFirebase style={{ color: "#ffcb2b" }} /> },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47a248" }} /> },
        { name: "Elasticsearch", icon: <SiElasticsearch style={{ color: "#005571" }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
        { name: "Oracle", icon: <SiOracle style={{ color: "#f80000" }} /> },
        { name: "SQL", icon: <SiSqlite style={{ color: "#003b57" }} /> },
      ],
    },
  ];

  return (
    <div className="technologies-container">
      <h2 className="tech">Technologies</h2>
      <h3>Our Expertise</h3>
      {data.map((category, index) => (
        <div key={index} className="category">
         <h4>{category.category}</h4>
          <div className="icons-grid">
            {category.items.map((item, idx) => (
              <div key={idx} className="icon-item">
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
