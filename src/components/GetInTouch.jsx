import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-32 text-center">
     
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
      >
        Let's Start Your <span className="text-green-500">Next Project</span>
      </motion.h2>

   
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="text-gray-600 text-lg md:text-xl leading-relaxed"
      >
       Ready to explore digital innovation or have a specific project in mind? We're here to help. Contact us using the form below and let's work together to bring your digital vision to life.
      </motion.p>
    </div>
  );
};

export default GetInTouch;