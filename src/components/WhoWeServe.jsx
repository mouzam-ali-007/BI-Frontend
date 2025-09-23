import React from 'react';
import { motion } from 'framer-motion';
import teamImage from '../assets/ABOUT-US-1.webp'; 
import { Link } from 'react-router-dom'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } },
};

const WhoWeServe = () => {
  return (
    <div className="bg-gray-50 py-20">
      <motion.div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Content */}
        <div className="px-4 sm:px-0">
          <motion.h2
            className="text-3xl font-bold text-blue-400 mb-4"
            variants={headingVariants}
          >
            Who We Serve?
          </motion.h2>
          <motion.p
            className="text-gray-700 leading-relaxed mb-6"
            variants={textVariants}
          >
            Bright Innovations proudly serves startups, SMEs, and large enterprises. Our services are perfect for: entrepreneurs who require scalable digital platforms, retailers who want to extend their e-commerce presence, corporates requiring bespoke enterprise software, marketers looking for data-driven digital marketing consulting services, and product owners developing cross-platform mobile applications. We tailor each project to your unique industry and objectives.
          </motion.p>
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4 mt-8"
            variants={headingVariants}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-gray-700 leading-relaxed mb-8"
            variants={textVariants}
          >
            We have a professional team of tech and creative experts,
            including developers, designers, marketers, and more — united
            by a single mission: to bring your ideas to life. From AI to
            automation, we blend innovation with business insight to help
            you grow and lead in the digital world.
          </motion.p>
          <motion.div variants={textVariants}>
            <Link
              to="/contact" // Replace with your actual contact page link
              className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Get in touch with us
              <svg
                className="inline-block ml-2 w-5 h-5 align-middle"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div className="rounded-lg overflow-hidden shadow-lg" variants={imageVariants}>
          <img src={teamImage} alt="Our Team" className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeServe;