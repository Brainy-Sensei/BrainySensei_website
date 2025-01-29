import React from 'react'
import Hero from '../componets/Hero'
import TeamSection from '../componets/TeamSection'
import Testimonials from '../componets/Testimonials'
import InputSection from '../componets/InputSection'
import ProductDescription from '../componets/ProductDescription'



function About({
  // heroStyle,
  // heroProps,
  teamMembers,
   teamData,
  // technologiesData,
  // testimonialsData,
  // productProps
}) {
  return (
    <div>
        {/* <Hero styleProps={heroStyle} {...heroProps} />
     <ProductDescription {...productProps} /> */}
   <TeamSection teamMembers={teamData} />
   {/* <Testimonials testimonials={testimonialsData} /> */}
   < InputSection />

    </div>
  )
}

export default About
