import React from 'react'
import Herosection from '../components/Herosection'
import BranchSection from '../components/BranchSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <>
    
    <Herosection/>
 

      {/* Branch Section */}
      <div id="branches">
        <BranchSection />
      </div>
      <div id="testimonials">
        <TestimonialSection/>
      </div>
    
    </>
   
  )
}

export default Home