import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import backgroundImg from "./image/background.jpg";

import OverlapSection from "./componets/OverlapSection";
import image from "./image/image.png"
import image1 from "./image/image1.png";
import Process from "./componets/Process";
import ProductDescription from"./componets/ProductDescription";
import bannerImage from './image/bannerImage.png';
 import Services from "./componets/Services";
 import TeamSection from "./componets/TeamSection";
 import Technologies from "./componets/Technologies";
 import Testimonials from "./componets/Testimonials";
 import InputSection from "./componets/InputSection";
  import Footer from "./componets/Footer";






const App =() =>{
  return(
    <div className="App">
           <Navbar />
          <HeroSection 
           title="Empowering Businesses with Scalable and Secure Technology"
          subtitle="We Are Here"
         buttonText="View More"
         backgroundImage={backgroundImg}
           // Pass background image here
            />
         < OverlapSection  mainImage={image}
          overlapImage={image1}
         subtitle="Who we are"
        title="Innovative Software Solutions Tailored for Your Success"
        description="We are a team of skilled professionals specializing in Software Development, AI, EdTech solutions, LLMs, and chatbots. Our goal is to ensure customer satisfaction by delivering innovative solutions that enhance your business through technology."
        buttonLabel="View More"
        /> 
         
             <Process />   
           <ProductDescription imageSrc={bannerImage}
          subtitle="What We Do"
         title="We Develop Products That People Love to Use."
         description="We are a team of skilled professionals specializing in Software Development, AI, EdTech solutions, and LLMs and chatbots, all united by a common goal of ensuring customer satisfaction. Our focus is on delivering innovative and comprehensive web solutions that enhance your business through technology."
          buttonText="View More"
        />
          <Services />  *
        <TeamSection />
       <Technologies /> 
       <Testimonials />  
       < InputSection />
        <Footer />     
    </div>

  );
}

export default App;