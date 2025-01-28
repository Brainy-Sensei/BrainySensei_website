import React from 'react'
import TeamSection from '../componets/TeamSection'
import Testimonials from '../componets/Testimonials'
import InputSection from '../componets/InputSection'
import ProductDescription from '../componets/ProductDescription'



function About({
   teamData,
  technologiesData,
  testimonialsData,
  productProps
}) {
  return (
    <div>
     <ProductDescription {...productProps} />
   <TeamSection teamMembers={teamData} />
   <Testimonials testimonials={testimonialsData} />
   < InputSection />

    </div>
  )
}

export default About
