

import React from 'react';
import Hero from "../components/Hero";
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/whyChooseUs';
import PartnerCarousel from '../ui/PartnerCarousel';
import PageBanner from '../ui/PageBanner';
import Testimonials from '../ui/Testimonials';


const Home = () => {
  return (
    <>
   
      <div className="relative z-0">
        <Hero />
      
        <div className="absolute inset-x-0 -bottom-24 z-10 w-full md:-bottom-28 lg:-bottom-32">
          <PartnerCarousel />
        </div>
      </div>
      
     
      <div className="mt-40 md:mt-48 lg:mt-56">
       <About/>
      <PageBanner/>
       <Services/>
       <WhyChooseUs/>
       <Testimonials/>
      </div>

     
    </>
  );
};

export default Home;