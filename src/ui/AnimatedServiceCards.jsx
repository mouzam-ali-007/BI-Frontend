import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

// Animation variants for the container to orchestrate child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adds a delay between each child's animation
    },
  },
};

// Animation variants for individual elements (heading, text, cards)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const AnimatedServiceCards = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Our Approach: Strategy, Execution, Results
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          At Bright Innovations, We convert user needs and ideas into practical, creative solutions through a continuous process of analysis, testing, and purposeful innovation.
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/* Card 1: Problem and Objectives */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center hover:bg-blue-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <FaTasks className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Problem and Objectives</h3>
            <p className="text-gray-600">To concisely define the process described in the text, highlighting its key stages and user-centric focus.</p>
          </motion.div>

          {/* Card 2: Understanding Our Users */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center hover:bg-blue-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Understanding Our Users</h3>
            <p className="text-gray-600">Analyze user behavior to shape targeted experiences.</p>
          </motion.div>

          {/* Card 3: Innovative Solution Ideation */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center hover:bg-blue-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <FaLightbulb className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovative Solution Ideation</h3>
            <p className="text-gray-600">Generate creative, effective concepts collaboratively.</p>
          </motion.div>

          {/* Card 4: Validate Assumptions */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center hover:bg-blue-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <FaCheckCircle className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Validate Assumptions</h3>
            <p className="text-gray-600">Test hypotheses before full-scale development begins.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedServiceCards;