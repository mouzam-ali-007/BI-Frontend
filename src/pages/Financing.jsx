import React from 'react'
import { motion,  } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import FAQWithCallout from '../components/FAQWithCallout';



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

const Financing = () => {
  return (
    <>
    {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `url(${bussinessBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
         Business Valuations / Consulting
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Business Solutions » Business Valuations / Consulting
          </motion.p>
        </section>
      </div>
      {/* call of action  */}
      <section className="bg-emerald-600 py-12 md:py-16 rounded-xl mx-4 md:mx-16 my-10 relative overflow-hidden text-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-1/3 -left-1/3 w-3/4 h-3/4 bg-emerald-500 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-3/4 h-3/4 bg-emerald-700 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="relative z-10 px-6">
        <motion.p
          className="text-white text-xl md:text-2xl font-semibold leading-snug max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          "Now, ready to take your business to the next level? Let's connect and find out how our smart solutions can truly move your business forward."
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-800 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg group"
          >
            Contact Us Today
            <ArrowRight className="ml-3 h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
    {/* FAQ */}
    <FAQWithCallout topic="financing" />
    </>
  )
}

export default Financing
