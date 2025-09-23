import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaDollarSign, FaRobot, FaUsers, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
};

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } }
};

const listItemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

const listContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }
};

export default function Services() {
  const serviceItems = [
    { title: 'AI Agents', icon: FaUsers },
    { title: 'Custom Software and Web Development', icon: FaLaptopCode },
    { title: 'E-commerce', icon: FaDollarSign },
    { title: 'Mobile and Web Application', icon: FaMobileAlt },
    { title: 'Digital Marketing', icon: FaBox },
  ];

  const automationPoints = [
    "End-to-End Workflow Automation",
    "Custom Integration with CRM Platforms",
    "Automated Customer Interaction Systems",
    "Real-Time Monitoring Dashboards"
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h4
            className="text-sm font-bold text-emerald-500 uppercase tracking-widest"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h4>
          <motion.h2
            className="text-3xl md:text-2xl font-bold text-gray-900"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Software Development Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Service Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-600 transition-all duration-300 transform"
                variants={cardItemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Featured Service & Text */}
          <div className="flex flex-col gap-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Automation</h3>
              
              <motion.p
                className="text-gray-600 leading-relaxed mt-2"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Streamline your operations with our business automation services. We create custom solutions that automate routine tasks, enhance productivity, and reduce operational costs. Let us handle the details so you can focus on your core business.
              </motion.p>

              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mt-4"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {automationPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    variants={listItemVariants}
                  >
                    <span className="text-green-500 mr-2">✔</span> {point}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 inline-block"
              >
                <Link
                  to="/Services/Mobile-web-development"
                  className="text-emerald-500 font-semibold hover:text-gray-500 transition-colors duration-300"
                >
                  View More →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}