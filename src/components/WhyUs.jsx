import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import whyChooseUsImage from '../assets/WHY-CHOOSE-US-1.webp';
import { motion } from 'framer-motion';

const cardData = [
  {
    icon: <FaCheckCircle className="text-3xl text-blue-500 mb-2" />,
    title: 'A Partnership in Success',
    description: 'By deeply understanding your brand, audience, and aspirations, we craft a bespoke strategy that not only meets your current needs but also lays the groundwork for your future success.',
  },
  {
    icon: <FaCheckCircle className="text-3xl text-blue-500 mb-2" />,
    title: 'Agile and Adaptive',
    description: ' We deliver our services with speed and precision, and our flexible approach allows us to quickly adapt to your evolving needs without ever compromising on quality. This makes us the perfect partner for businesses that need to stay ahead of the curve.',
  },
  
  {
    icon: <FaCheckCircle className="text-3xl text-blue-500 mb-2" />,
    title: 'Innovative Solutions',
    description: 'Our solutions are innovative and tailored to your specific needs, providing a competitive edge.',
  },
  {
    icon: <FaCheckCircle className="text-3xl text-blue-500 mb-2" />,
    title: 'Excellent Support',
    description: 'We provide continuous, end-to-end support, offering maintenance, updates, and expert technical advice to ensure your solution remains reliable, secure, and optimized for long-term success',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyUs = () => {
  return (
    <motion.section 
      id="why-choose-us" 
      className="py-16 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Header and Paragraph */}
        <div className="flex flex-col space-y-4 text-center max-w-2xl mx-auto mb-12">
          <motion.p
            variants={textVariants}
            className="text-sm font-bold text-blue-600 uppercase tracking-widest"
          >
            WHY US?
          </motion.p>
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Our Distinct Edge
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-gray-600 leading-relaxed"
          >
            Whether you need to increase productivity, enhance collaboration, or achieve something entirely new, our solutions are meticulously crafted to meet your specific needs and drive your success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column with Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg"
          >
            <img src={whyChooseUsImage} alt="Why Choose Us" className="w-full h-full object-cover rounded-lg" />
          </motion.div>

          {/* Right Column with Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                {card.icon}
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;