import React from 'react'
import Testimonials from '../componets/Testimonials'
import InputSection from '../componets/InputSection'

function Contact({testimonialsData}) {
  return (
    <div>
     <Testimonials testimonials={testimonialsData} />
     <InputSection />
    </div>
  )
}

export default Contact
