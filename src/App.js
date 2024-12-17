import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";


const App =() =>{
  return(
    <div className="App">
      <Navbar />
      <HeroSection   />
      <AboutSection />
      
     
    </div>

  );
}

export default App;