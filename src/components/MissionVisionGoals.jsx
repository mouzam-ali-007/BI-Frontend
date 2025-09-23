// src/components/MissionVisionGoals.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaRocket } from 'react-icons/fa';

// Data for the cards
const cardData = [
  {
    icon: <FaBullseye className="w-12 h-12 text-green-500 mb-4" />,
    title: 'OUR MISSION',
    description: 'Delivering innovative digital solutions that empower businesses to succeed in the modern world.',
    colorClass: 'bg-white',
  },
  {
    icon: <FaEye className="w-12 h-12 text-green-500 mb-4" />,
    title: 'OUR VISION',
    description: 'To become a global leader in digital services by driving innovation and fostering client growth.',
    colorClass: 'bg-white',
  },
  {
    icon: <FaRocket className="w-12 h-12 text-green-500 mb-4" />,
    title: 'OUR GOALS',
    description: 'To streamline client operations, enhance customer experience, and accelerate digital transformation.',
    colorClass: 'bg-white',
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MissionVisionGoals = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          We are dedicated to building a brighter future through our foundational principles.
        </motion.p>
      </div>
      
      <motion.div
        className="container mx-auto grid gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-colors duration-300 ${card.colorClass} hover:bg-green-500 hover:text-white`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">
              {React.cloneElement(card.icon, {
                className: `${card.icon.props.className} group-hover:text-white transition-colors duration-300`,
              })}
            </div>
            {/* Heading and text */}
            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-white">{card.title}</h3>
            <div className="w-16 h-1 bg-green-500 mb-4 transition-colors duration-300 group-hover:bg-white"></div>
            <p className="transition-colors duration-300 group-hover:text-white">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MissionVisionGoals;