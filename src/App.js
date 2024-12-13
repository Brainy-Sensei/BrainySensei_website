import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";


const App =() =>{
  return(
    <div>
      <Navbar />
      <HeroSection
        background="background.jpg"
        subtitle="We Are Here"
        title="Empowering Businesses with Scalable and Secure Technology"
        buttonText="View More"
      />
    </div>

  );
}

export default App;