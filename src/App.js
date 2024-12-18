import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";
import ProcessSection from "./componets/ProcessSection";


const App =() =>{
  return(
    <div className="App">
      <Navbar />
      <HeroSection   />
      <AboutSection />
      <ProcessSection />
      
      
     
    </div>

  );
}

export default App;