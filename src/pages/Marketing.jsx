import React from 'react'
import { motion,  } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutBackground from "../assets/about_background.png";
import FAQWithCallout from '../components/FAQWithCallout';
import marketingImg from "../assets/Digital-Marketing-2.webp";
import { FaRobot,FaLightbulb,FaLaptopCode,FaRocket, FaHandsHelping, FaChartLine, FaClock, FaCogs, FaMobileAlt, FaShieldAlt, FaTachometerAlt, FaLaptopCode as FaLaptopCodeIcon } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const steps = [
  {
    icon: <FaLightbulb className="text-emerald-500 text-3xl" />,
    title: "1. Strategy & Planning",
    desc: "We analyze your business, target audience, and competition to create a data-driven digital marketing strategy.",
  },
  {
    icon: <FaLaptopCode className="text-emerald-500 text-3xl" />,
    title: "2. Execution & Optimization",
    desc: "Our team implements your campaigns, from content creation to ad management, with continuous optimization.",
  },
  {
    icon: <FaRocket className="text-emerald-500 text-3xl" />,
    title: "3. Analysis & Reporting",
    desc: "We provide detailed performance reports, offering clear insights and recommendations to improve your ROI.",
  },
  {
    icon: <FaHandsHelping className="text-emerald-500 text-3xl" />,
    title: "4. Ongoing Support",
    desc: "We offer continuous support and strategic advice to keep your digital presence strong and effective.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, 
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

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Why Choose Our Digital Marketing Solutions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaChartLine />,
            title: "Data-Driven Strategies",
            desc: "Our campaigns are powered by real-time data to maximize your return on investment and drive measurable results.",
          },
          {
            icon: <FaTachometerAlt />,
            title: "Performance & Results",
            desc: "We focus on delivering tangible outcomes like increased traffic, leads, and conversions for your business.",
          },
          {
            icon: <FaClock />,
            title: "24/7 Presence",
            desc: "Your brand is always visible to your target audience, ensuring continuous engagement and growth.",
          },
          {
            icon: <FaCogs />,
            title: "Seamless Integrations",
            desc: "We connect your marketing efforts to essential tools and platforms for a cohesive and efficient ecosystem.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="text-4xl text-emerald-500 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const Marketing = () => {
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
        Digital Marketing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Services » Digital Marketing
          </motion.p>
        </section>
      </div>
      {/* Service Section */}
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
                          src={marketingImg}
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
                          Digital Marketing
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                     Scale up your business with Bright's data-driven digital marketing services for small businesses and enterprises. We provide customized solutions that drive visibility, generate leads, and deliver measurable growth, all from our canopy of cost-effective digital marketing services.
                        </p>
            
                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                          {[
                            "Custom AI Agent Development",
                            "Voice-Enabled Interaction",
                            "24/7 Automated Support",
                            "Contextual Understanding",
                            "Real-Time Data Processing",
                            "Cross-Platform Compatibility",
                            "Scalable Architecture",
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
                  {/* why choose us  */}
            <WhyChooseUs/>
                  {/* our development */}
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
                            Our Digital Marketing Process
                          </motion.h2>
                          <motion.p
                            className="text-gray-600 max-w-2xl mx-auto text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            A streamlined 4-step process to bring powerful digital marketing solutions to your business.
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
         <FAQWithCallout topic="marketing" />
    </>
  )
}

export default Marketing