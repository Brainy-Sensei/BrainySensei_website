import React from "react";
 import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import OverlapSection from "./componets/OverlapSection";
import Process from "./componets/Process";
import ProductDescription from"./componets/ProductDescription";
import Services from "./componets/Services"
 import TeamSection from "./componets/TeamSection";
 import Technologies from "./componets/Technologies";
 import Testimonials from "./componets/Testimonials";
 import InputSection from "./componets/InputSection";
 import Footer from "./componets/Footer";
 import {  Routes, Route } from "react-router-dom";
 

import background from "./image/background.jpg"
import image from "./image/image.png"
import image1 from "./image/image1.png"
import { icon } from "@fortawesome/fontawesome-svg-core";
import banner from "./image/bannerImage.png"
import { FaLaptopCode, FaRobot, FaComments, FaBrain, FaUsers, FaGraduationCap } from "react-icons/fa";
import AbhishekShankar from "./image/abhishek-shankar.jpg";
import ShwetaSrivastava from "./image/shweta-srivastava.jpg";
import DhariniPandey from "./image/dharini-panday.jpg";
import PoojaDhaker from "./image/pooja-dhaker.jpg";
import {
  FaJs,
  FaJava,
  FaPython,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaReact,
  FaVuejs,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiKotlin,
  SiFlutter,
  SiMagento,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiElasticsearch,
  SiSqlite,
} from "react-icons/si";

import Ellipse4 from "./image/Ellipse 4.png";
import Ellipse from "./image/Ellipse .png";
import Home  from "./Pages/Home"
import About from "./Pages/About";
import Service from "./Pages/Service";
import Portfolieo from "./Pages/Portfolieo"
import Contact from "./Pages/Contact";
import Layout from "./layout/Layout";





const App =() =>{
  const heroStyle = {
    backgroundImage: `url(${background})`, // Replace with actual image path
  };

  const heroProps = {
    subtitle: "We Are Here",
    title: "Empowering Businesses with Scalable and Secure Technology",
    buttonText: "View More",
    onButtonClick: () => alert("Button Clicked!"),
  };

  const overlapProps = {
    mainImage:  image,
    overlapImage: image1 , 
    subtitle: "Who We Are",
    title: "Innovative Software Solutions Tailored for Your Success",
    description:
      "We are a team of skilled professionals specializing in software development, AI/ML solutions, and much more. Our goal is to deliver innovative solutions that enhance your business through technology.",
    buttonLabel: "View More",
  };
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
  const productProps = {
    imageSrc1: banner,
    subtitle1: "What We Do",
    title1: "We Develop Products That People Love to Use.",
    description1:
      "We are a team of skilled professionals specializing in Software Development, AI, EdTech solutions, and LLMs and chatbots, all united by a common goal of ensuring customer satisfaction. Our focus is on delivering innovative and comprehensive web solutions that enhance your business through technology.",
    buttonText1: "View More",
  };

  const servicesData = [
    {
      title: "Software Development",
      description:
        "We offer software development across web, mobile, and desktop platforms, using tech stacks like MERN, MEAN, Python, Go, and frameworks like React Native and Flutter.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Generative AI",
      description:
        "We provide both custom AI model development and integration of existing AI models to meet diverse client needs.",
      icon: <FaRobot />,
    },
    {
      title: "LLM and Chatbot Development",
      description:
        "We create custom LLMs and AI chatbots tailored to your business, improving customer service, automating tasks, and delivering personalized solutions.",
      icon: <FaComments />,
    },
    {
      title: "AI Customization",
      description:
        "Train AI models on client data for high accuracy, and develop chatbots for brand-consistent customer interactions. Use LLMs to automate tasks and deliver industry-specific expertise.",
      icon: <FaBrain />,
    },
    {
      title: "Tech Team as a Service",
      description:
        "We build and manage tech teams, offering flexible models for temporary, permanent, or full-service departments, handling recruitment, onboarding, and maintenance.",
      icon: <FaUsers />,
    },
    {
      title: "EduTech Solution",
      description:
        "We provide customized curricula, session-wise assignments, professional course videos, and complete EdTech setup, including LMS integration and platform deployment.",
      icon: <FaGraduationCap />,
    },
  ];

  const teamData = [
    {
      name: "Abhishek Shankar",
      role: "Founder",
      image: AbhishekShankar,
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
      image: PoojaDhaker,
    },
  ];

 
  
  const technologiesData = [
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


  const testimonialsData = [
    {
      id: 1,
      name: "",
      role: "",
      image: "",
      text1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 2,
      name: "Daria Linney",
      role: "CIO",
      image: Ellipse4,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      name: "Samuel Karl",
      role: "CEO",
      image: Ellipse,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  

 

  
  

  
  return(
         

     <div className="App">
     
              <Navbar /> 
                <Hero styleProps={heroStyle} {...heroProps} />
             <OverlapSection {...overlapProps} />
            <Process steps={steps} />
           <ProductDescription {...productProps} />
           <Services services={servicesData} />
            <TeamSection teamMembers={teamData} />
           <Technologies {...{ data: technologiesData }} />
          <Testimonials testimonials={testimonialsData} /> 
         < InputSection />
            <Footer />        
          <Routes>
                 <Route  path="/" element= {<Layout />}/>
             <Route path= "/home" element={<Home />} />
             <Route path="about" element={<About />} />
             <Route path="service" element={<Service />} />
            <Route path="portfolieo" element={<Portfolieo />} />
            <Route path="contact" element={<Contact />} />

           </Routes> 
         
      </div>

  );
}

export default App;