import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import OverlapSection from "./componets/OverlapSection";
import Process from "./componets/Process";
// import WhoWeAre from "./componets/WhoWeAre";
//  import ProcessSection from "./componets/ProcessSection";
//  import ProductSection from "./componets/FeatureSection";
//  import FeatureSection from "./componets/FeatureSection";
//  import Services from "./componets/Services";
//  import TeamSection from "./componets/TeamSection";
//  import Technologies from "./componets/Technologies";
//  import Testimonials from "./componets/Testimonials";
//  import InputSection from "./componets/InputSection";
//   import Footer from "./componets/Footer";
// import WhoWeAre from "./componets/WhoWeAre";





const App =() =>{
  return(
    <div className="App">
      <Navbar />
        <HeroSection  />
      < OverlapSection />
      {/* <WhoWeAre /> */} 
        {/* <Process />  */}
      {/* <FeatureSection />
      <Services />
      <TeamSection />
      <Technologies /> 
      <Testimonials /> 
      <InputSection />
       <Footer />         */} 
    </div>

  );
}

export default App;