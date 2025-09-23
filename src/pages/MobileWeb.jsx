
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBackground from "../assets/about_background.png";
import webImage from "../assets/Mobile-and-Web-Application-1.webp"; 
import { FaMobileAlt, FaCode, FaRocket, FaCogs, FaChevronDown } from "react-icons/fa";
import { Lightbulb, Code, Layers, Rocket } from "lucide-react";
import FAQWithCallout from "../components/FAQWithCallout";


// Motion variants
const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: "easeOut" },
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

const steps = [
  {
    title: "1. Idea & Strategy",
    desc: "We begin by defining your project's goals, target audience, and technical requirements to create a robust roadmap for success.",
    icon: <Lightbulb className="w-8 h-8 text-green-600" />,
  },
  {
    title: "2. Design & Prototyping",
    desc: "Our team crafts a stunning and intuitive user interface (UI) and user experience (UX), creating wireframes and interactive prototypes for your app or website.",
    icon: <Layers className="w-8 h-8 text-green-600" />,
  },
  {
    title: "3. Development",
    desc: "We bring the design to life, writing clean, efficient code for the front-end, back-end, and database to build a high-performing and scalable application.",
    icon: <Code className="w-8 h-8 text-green-600" />,
  },
  {
    title: "4. Deployment & Support",
    desc: "After rigorous testing, we handle the launch to app stores or web servers and provide ongoing maintenance, security updates, and new feature implementation.",
    icon: <Rocket className="w-8 h-8 text-green-600" />,
  },
];

// FAQ Item Component
// const FAQItem = ({ question, answer, isOpen, onClick }) => (
//   <div className="border-b border-gray-200 py-4">
//     <button
//       onClick={onClick}
//       className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
//     >
//       {question}
//       <motion.span
//         animate={{ rotate: isOpen ? 180 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <FaChevronDown className="text-gray-600" />
//       </motion.span>
//     </button>
//     <AnimatePresence>
//       {isOpen && (
//         <motion.p
//           className="mt-3 text-gray-600"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           {answer}
//         </motion.p>
//       )}
//     </AnimatePresence>
//   </div>
// );

const MobileWeb = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // const faqs = [
  //   {
  //     question: "What technologies do you use for mobile & web development?",
  //     answer:
  //       "We use React.js, Node.js, Express.js, MongoDB, and Tailwind CSS for web, and React Native or Flutter for mobile applications.",
  //   },
  //   {
  //     question: "Do you build apps for both iOS and Android?",
  //     answer:
  //       "Yes! We create cross-platform apps using React Native and Flutter, ensuring smooth performance on both iOS and Android.",
  //   },
  //   {
  //     question: "How long does it take to build a mobile or web app?",
  //     answer:
  //       "It depends on project complexity. A basic app may take 4–8 weeks, while a large-scale platform may take several months.",
  //   },
  //   {
  //     question: "Will my app be scalable for future growth?",
  //     answer:
  //       "Absolutely! We design and develop apps with scalability in mind, so your business can grow without performance issues.",
  //   },
  //   {
  //     question: "Do you offer post-launch support?",
  //     answer:
  //       "Yes, we provide ongoing maintenance, updates, and technical support to keep your app secure and up-to-date.",
  //   },
  // ];

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
            Mobile & Web Application
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Services » Mobile & Web Application
          </motion.p>
        </section>
      </div>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={webImage}
              alt="Mobile & Web Development"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Mobile & Web Application Development
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in creating high-performance, scalable, and modern
              mobile and web applications tailored to your business. Our team
              leverages the latest technologies to ensure seamless user
              experiences across platforms.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaMobileAlt />,
              title: "Responsive Design",
              desc: "We build apps that look stunning and perform flawlessly on any device.",
            },
            {
              icon: <FaCode />,
              title: "Modern Tech Stack",
              desc: "Using React, Node.js, MongoDB & Tailwind to deliver reliable solutions.",
            },
            {
              icon: <FaRocket />,
              title: "High Performance",
              desc: "Optimized for speed, scalability, and smooth interactions.",
            },
            {
              icon: <FaCogs />,
              title: "Custom Solutions",
              desc: "Every business is unique—we build applications to match your needs.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-emerald-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    {/* Heading */}
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Our Mobile & Web Development Process
    </motion.h2>
    <motion.p
      className="text-gray-600 max-w-2xl mx-auto text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      A streamlined 4-step process to bring your digital product to life—from a
      single concept to a fully launched and supported application.
    </motion.p>

   
    <div className="relative">
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

          
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-green-600 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
   <section className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-20 bg-emerald-600 text-white rounded-2xl text-center shadow-md py-12">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Build Your Mobile & Web App?
      </h2>
      <p className="mb-6 text-lg">
        Partner with us to create mobile-friendly, high-performing apps that
        scale with your business.
      </p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/contact"
          className= "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-800 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg group"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  </div>
</section>
 <FAQWithCallout topic="mobile-web" />


    </>
  );
};

export default MobileWeb;
