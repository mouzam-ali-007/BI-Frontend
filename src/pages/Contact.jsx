import React from "react";
import { motion } from 'framer-motion';
import contactBackground from "../assets/contact.png";
import GetInTouch from "../components/GetInTouch";
import ContactForm from "../ui/ContactForm";

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
   <>
    <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `url(${contactBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Main content section for contact Us */}
        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » contact Us
          </motion.p>
        </section>
      </div>
      <GetInTouch/>
      <ContactForm/>
     
   </>
    
  );
};

export default Contact;