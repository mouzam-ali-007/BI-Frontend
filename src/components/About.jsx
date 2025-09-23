import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaStar, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Counter from './Counter'; 

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8 } }
};

export default function About() {
  return (
    <section id="about" className="section-wrap bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-widest">
              About Us
            </h3>
            
            <motion.h2
              className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight"
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Some Facts About Bright Innovations
            </motion.h2>
            
            <motion.p
              className="text-gray-600 leading-relaxed"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Bright Innovations is a technology solution provider focused on creating high-performing, scalable digital solutions for startups, agencies, and enterprises. 
              We integrate technical expertise with human-centered design to create seamless experiences on web, mobile, AI, and automation platforms. 
              From excellent web and ecommerce mobile application development to high-end AI agents and automation personnel services, 
              we turn business concepts into reality.
            </motion.p>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 self-center md:self-start"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 text-white rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center shadow-lg"
            >
              <FaUserCheck className="text-4xl mb-4 text-white" />
              <Counter value={30} />
              <p className="text-sm font-light">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 text-white rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center shadow-lg"
            >
              <FaStar className="text-4xl mb-4 text-white" />
              <Counter value={30} />
              <p className="text-sm font-light">Customer Reviews</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-blue-900 text-white rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center shadow-lg col-span-1 sm:col-span-2"
            >
              <FaClipboardCheck className="text-4xl mb-4 text-white" />
              <Counter value={30} />
              <p className="text-sm font-light">Complete Projects</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}