import React from "react";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import OverlapSection from "./componets/OverlapSection";
 import Process from "./componets/Process";
 import ProductDescription from"./componets/ProductDescription";
 import Services from "./componets/Services";
 import TeamSection from "./componets/TeamSection";
 import Technologies from "./componets/Technologies";
 import Testimonials from "./componets/Testimonials";
 import InputSection from "./componets/InputSection";
//   import Footer from "./componets/Footer";






const App =() =>{
  return(
    <div className="App">
      <Navbar />
         <HeroSection  />
       < OverlapSection />
            <Process />   
           <ProductDescription />
         <Services />  *
        <TeamSection />
       <Technologies /> 
       <Testimonials />  
       <InputSection /> 
       {/* <Footer />            */}
    </div>

  );
}

export default App;