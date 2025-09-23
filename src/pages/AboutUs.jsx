

import React from 'react';
import { motion } from 'framer-motion';
import aboutBackground from '../assets/about_background.png';
import MissionVisionGoals from '../components/MissionVisionGoals';
import OurTeam from '../components/OurTeam';
import WhyUs from '../components/WhyUs';
import ValueProposition from '../components/ValueProposition';
import WhoWeServe from '../components/WhoWeServe';

import AnimatedServiceCards from '../ui/AnimatedServiceCards';
import StatsSection from '../ui/StatsSection';


const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } }
};

const AboutUs = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `url(${aboutBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Main content section for About Us */}
        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » About Us
          </motion.p>
        </section>
      </div>
      <MissionVisionGoals/>
      <OurTeam/>
      <WhyUs/>
     <StatsSection/>
      <ValueProposition/>
      <AnimatedServiceCards/>
      <WhoWeServe/>
    </>
  );
};

export default AboutUs;