import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";
import ProcessSection from "./componets/ProcessSection";
import ProductSection from "./componets/FeatureSection";
import FeatureSection from "./componets/FeatureSection";
// import Team from "./componets/Team";
// import Technologies from "./componets/Technologies";

import Services from "./componets/Services";


const App =() =>{
  return(
    <div className="App">
      <Navbar />
      <HeroSection  />
      <AboutSection />
      <ProcessSection />
      <FeatureSection />
      <Services />
      {/* <Team />
      <Technologies /> */}
      
      
     
    </div>

  );
}

export default App;