import React from 'react'
import Hero from '../componets/Hero'
// import Navbar from '../componets/Navbar'
import OverlapSection from '../componets/OverlapSection'
import Process from '../componets/Process'
import ProductDescription from '../componets/ProductDescription'
import Services from '../componets/Services'
import TeamSection from '../componets/TeamSection'
import Technologies from '../componets/Technologies'
import Testimonials from '../componets/Testimonials'
import InputSection from '../componets/InputSection'
// import Footer from '../componets/Footer'

function Home({
  heroStyle,
  heroProps,
  overlapProps,
  steps,
  productProps,
  servicesData,
  teamData,
  technologiesData,
  testimonialsData,
}) {
  return (
    <div>
     {/* <Navbar /> */}
       <Hero styleProps={heroStyle} {...heroProps} />
       <OverlapSection {...overlapProps} />
            <Process steps={steps} />
           <ProductDescription {...productProps} />
           <Services services={servicesData} />
            <TeamSection teamMembers={teamData} />
           <Technologies {...{ data: technologiesData }} />
          <Testimonials testimonials={testimonialsData} />
         < InputSection />
            {/* <Footer />  */}

    </div>
  )
}

export default Home
