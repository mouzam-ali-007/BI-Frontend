import React from 'react'
import { motion,  } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutBackground from "../assets/about_background.png";
import ecommerceImg from "../assets/Ecommerce-2.webp"
import FAQWithCallout from '../components/FAQWithCallout';
import { FaShoppingCart, FaCreditCard, FaMobileAlt, FaUsers, FaChartLine, FaShieldAlt , } from "react-icons/fa";
// Add these imports for the new section
import { FaLightbulb, FaLaptopCode, FaRocket, FaHandsHelping } from "react-icons/fa"; 


const ecommerceFeatures = [
  {
    icon: <FaShoppingCart />,
    title: "Seamless Shopping Experience",
    desc: "Deliver smooth browsing, quick product search, and intuitive navigation for your customers.",
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Payments",
    desc: "Multiple payment gateways with encryption ensure safe and hassle-free checkout.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Design",
    desc: "Optimized for mobile users to maximize reach and engagement.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Accounts",
    desc: "Personalized dashboards, wishlists, and order history for better customer loyalty.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Insights",
    desc: "Track sales, customers, and performance with real-time reporting tools.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Scalable & Secure",
    desc: "Robust infrastructure that grows with your business and ensures data security.",
  },
];

// Add the steps and stepVariants constants for the new section
const steps = [
  {
    icon: <FaLightbulb className="text-emerald-500 text-3xl" />,
    title: "1. Discovery & Strategy",
    desc: "We dive deep into your brand, audience, and goals to craft a strategic e-commerce roadmap for your success.",
  },
  {
    icon: <FaLaptopCode className="text-emerald-500 text-3xl" />,
    title: "2. Design & Development",
    desc: "Our team builds a stunning, responsive online store, integrating key features like secure payments, shipping, and inventory tools.",
  },
  {
    icon: <FaRocket className="text-emerald-500 text-3xl" />,
    title: "3. Launch & Optimization",
    desc: "We handle a flawless launch and provide post-launch optimization to fine-tune performance and customer experience.",
  },
  {
    icon: <FaHandsHelping className="text-emerald-500 text-3xl" />,
    title: "4. Ongoing Support",
    desc: "We offer continuous support, security updates, and strategic advice to ensure your store stays ahead of the competition.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered animation
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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

const Ecommerce = () => {
  return (
    <>
    {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `url(${aboutBackground})`,
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
          E-Commerce
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Services » E-Commerce
          </motion.p>
        </section>
      </div>
{/* main content  */}
 <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={ecommerceImg}
              alt="AI Agent assisting a professional at a computer"
              className="rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(34,197,94,0.3)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-emerald-500 font-semibold uppercase tracking-wide">
              Service
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Ecommerce
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
             Unlock a new level of performance with intelligent AI agents from Bright Innovations. Our solutions seamlessly automate customer support and real-time data analysis, integrating directly into your workflows. The result? Unmatched efficiency, sharper insights, and a more engaged audience across every platform.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Integrated Payment Solutions",
                "Voice-Enabled Interaction",
                "24/7 Automated Support",
                "Contextual Understanding",
                "Real-Time Data Processing",
                "Real-Time Inventory Sync",
                "Insightful Analytics Dashboard",
                "User Behavior Insights",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-emerald-500 text-xl">✔</span>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

   
<section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Development Process
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our streamlined 4-step process ensures a smooth journey from concept to a successful online store.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line in center */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`relative md:flex items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="md:w-1/2 bg-gray-50 rounded-2xl shadow-md p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {step.icon}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-green-600 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

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



      {/* FAQS */}
      <FAQWithCallout topic="ecommerce" />
    </>
  )
}

export default Ecommerce