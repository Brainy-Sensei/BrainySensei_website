import React from 'react'
import ProductDescription from '../componets/ProductDescription'
import Process from '../componets/Process'
import Services from '../componets/Services'
import TeamSection from '../componets/TeamSection'
import Technologies from '../componets/Technologies'
import Testimonials from '../componets/Testimonials'
import InputSection from '../componets/InputSection'
function Service({
  productProps,
  steps,
  servicesData,
  teamData,
  technologiesData,
  testimonialsData,
}) {
  return (
    <div>
            <ProductDescription {...productProps} />
            <Process steps={steps} />
           <Services services={servicesData} />
            <TeamSection teamMembers={teamData} />
           <Technologies {...{ data: technologiesData }} />
          <Testimonials testimonials={testimonialsData} />
         < InputSection />
    </div>
  )
}

export default Service
