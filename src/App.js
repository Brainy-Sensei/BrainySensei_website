import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";
import ProcessSection from "./componets/ProcessSection";
import ProductSection from "./componets/FeatureSection";
import FeatureSection from "./componets/FeatureSection";
import Services from "./componets/Services";
import TeamSection from "./componets/TeamSection";
import Technologies from "./componets/Technologies";
import Testimonials from "./componets/Testimonials";




const App =() =>{
  return(
    <div className="App">
      <Navbar />
      <HeroSection  />
      <AboutSection />
      <ProcessSection />
      <FeatureSection />
      <Services />
      <TeamSection />
      <Technologies /> 
      {/* <Testimonials />   */}
      
      
     
    </div>

  );
}

export default App;