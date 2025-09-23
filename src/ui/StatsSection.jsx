import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { FaUserCheck, FaStar, FaClipboardCheck, FaGlobe } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Happy Clients Card */}
          <div className="bg-blue-900 text-white rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
            <FaUserCheck className="text-4xl mb-4 text-white" />
            <h4 className="text-4xl font-bold">
              <Counter value={30} />
            </h4>
            <p className="text-sm font-light">Happy Clients</p>
          </div>

          {/* Customer Reviews Card */}
          <div className="bg-gray-900 text-white rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
            <FaStar className="text-4xl mb-4 text-white" />
            <h4 className="text-4xl font-bold">
              <Counter value={30} />
            </h4>
            <p className="text-sm font-light">Customer Reviews</p>
          </div>

          {/* Completed Projects Card */}
          <div className="bg-blue-900 text-white rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
            <FaClipboardCheck className="text-4xl mb-4 text-white" />
            <h4 className="text-4xl font-bold">
              <Counter value={30} />
            </h4>
            <p className="text-sm font-light">Completed Projects</p>
          </div>

          {/* Countries Card */}
          <div className="bg-gray-900 text-white rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
            <FaGlobe className="text-4xl mb-4 text-white" />
            <h4 className="text-4xl font-bold">
              <Counter value={5} />
            </h4>
            <p className="text-sm font-light">Countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;