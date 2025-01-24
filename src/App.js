import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import OverlapSection from "./componets/OverlapSection";
import Process from "./componets/Process";
import ProductDescription from"./componets/ProductDescription";
import Services from "./componets/Services";
 import TeamSection from "./componets/TeamSection";
 import Technologies from "./componets/Technologies";
 import Testimonials from "./componets/Testimonials";
 import InputSection from "./componets/InputSection";
  import Footer from "./componets/Footer";


import background from "./image/background.jpg"
import image from "./image/image.png"
import image1 from "./image/image1.png"
import { icon } from "@fortawesome/fontawesome-svg-core";
import banner from "./image/bannerImage.png"



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
    mainImage:  image,// Replace with your actual image path
    overlapImage: image1 , // Replace with your actual image path
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

  const servicesProps = {
    services: [
      { name: "Software Development", description: "Building tailored software solutions." },
      { name: "AI Solutions", description: "Harnessing AI for smarter applications." },
      { name: "LLM Development", description: "Custom language models for your business." },
    ],
  }

 
  
  

  
  return(
    <div className="App">
     
           <Navbar />
           <Hero styleProps={heroStyle} {...heroProps} />
           <OverlapSection {...overlapProps} />
           <Process steps={steps} />
           <ProductDescription {...productProps} />
           <Services {...servicesProps} />
         
         
        
      
            
           
           
        
          <Services />  
        <TeamSection />
        <Technologies /> 
       <Testimonials />  
       < InputSection />
        <Footer />      
    </div>

  );
}

export default App;