

import React from 'react';
import { motion } from 'framer-motion';
import checklistImage from '../assets/WHY-US.webp'; 
import { FaArrowRight } from 'react-icons/fa'; 

const ValueProposition = () => {
  // Variants for individual animations
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Stagger container for the whole right column
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  // Variants for individual text elements and features
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section with Animation */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src={checklistImage}
            alt="Checklist"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Content Section with Animations */}
        <motion.div
          className="px-4 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={childVariants}
            className="flex flex-col space-y-4"
          >
            <motion.p
              variants={childVariants}
              className="text-sm font-bold text-blue-600 uppercase tracking-widest"
            >
              WHY CHOOSE US?
            </motion.p>
            <motion.h2
              variants={childVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Our Distinct Edge
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-gray-600 leading-relaxed"
            >
              Bright Innovations is committed to engineering the future of digital for your business. We craft scalable web, mobile, and AI solutions that merge cutting-edge technology with intuitive design. Whether you're a startup looking to launch or a large enterprise seeking to optimize, we deliver seamless, high-performing systems that drive growth and redefine your digital presence.
            </motion.p>
          </motion.div>

          {/* Feature 1: Dedicated Professionals */}
          <motion.div
            className="flex items-start mt-6"
            variants={childVariants}
          >
            <FaArrowRight className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Dedicated Professionals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With expertise in the latest technologies, our seasoned
                professionals meticulously manage your projects, ensuring they
                are executed with utmost care and precision.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Tailored Strategies */}
          <motion.div
            className="flex items-start mt-4"
            variants={childVariants}
          >
            <FaArrowRight className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Customized Strategies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that every business is unique. Therefore, we
                develop personalized digital strategies designed to address your
                specific challenges and opportunities for optimal outcomes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ValueProposition;