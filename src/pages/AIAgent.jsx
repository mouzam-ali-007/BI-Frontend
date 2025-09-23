import React from "react";
import { motion, } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBackground from "../assets/about_background.png";
import aiAgentImg from "../assets/AI-Agent-2.webp";
import { Cpu, MessageSquare, Globe2, ShieldCheck, LineChart, PlugZap, Briefcase, ShoppingCart, Headphones, ChartLine, Users, Building,  ArrowRight,Lightbulb, Code, Layers, Rocket, } from "lucide-react";

import FAQWithCallout from "../components/FAQWithCallout";







const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: "easeOut" },
  }),
};

const steps = [
    {
      title: "1. Idea & Strategy",
      desc: "We start by understanding your business goals and identifying the right AI solutions that fit your needs.",
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
    },
    {
      title: "2. Design & Prototyping",
      desc: "Our team designs intuitive workflows and prototypes, ensuring seamless integration of AI into your processes.",
      icon: <Layers className="w-8 h-8 text-green-600" />,
    },
    {
      title: "3. Development",
      desc: "We build and train AI agents with cutting-edge tools and technologies tailored to your unique business challenges.",
      icon: <Code className="w-8 h-8 text-green-600" />,
    },
    {
      title: "4. Deployment & Support",
      desc: "After launch, we continuously monitor, optimize, and provide ongoing support to ensure long-term success.",
      icon: <Rocket className="w-8 h-8 text-green-600" />,
    },
  ];

const useCases = [
  {
    icon: Briefcase,
    title: "Sales Automation",
    description: "Automate lead qualification and follow-ups with intelligent conversations.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Provide real-time product recommendations and shopping assistance.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Resolve queries instantly with 24/7 multilingual support agents.",
  },
  {
    icon: ChartLine,
    title: "Data Insights",
    description: "Extract insights from interactions to improve decision-making.",
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    description: "Screen candidates, schedule interviews, and answer HR queries.",
  },
  {
    icon: Building,
    title: "Enterprise Ops",
    description: "Automate IT helpdesk, internal tools, and employee workflows.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-emerald-500" />,
    title: "Persona Customization",
    desc: "Design agents with unique roles and personalities that reflect your brand identity."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
    title: "Natural Language Understanding",
    desc: "Agents respond with human-like conversation flow, powered by deep learning models."
  },
  {
    icon: <PlugZap className="w-8 h-8 text-emerald-500" />,
    title: "Seamless Integration",
    desc: "Easily connect with CRMs, knowledge bases, and third-party applications."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-emerald-500" />,
    title: "Multilingual Support",
    desc: "Deliver effortless communication across multiple languages and regions."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: "Secure & Reliable",
    desc: "Built-in governance ensures data accuracy, compliance, and trustworthy responses."
  },
  {
    icon: <LineChart className="w-8 h-8 text-emerald-500" />,
    title: "Data-Driven Insights",
    desc: "Dashboards track sentiment, engagement, and trends for better decision-making."
  },
];

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

const AIAgent = () => {
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
            AI Agents
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Services » AI Agents
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
              src={aiAgentImg}
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
              AI Agents
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Upgrade your business operations with our advanced AI agent
              solutions. Our intelligent agents handle customer queries, analyze
              data in real-time, and integrate smoothly with your workflows—
              helping you achieve higher efficiency, smarter insights, and
              improved engagement across all platforms.
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

     <section className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
   
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-emerald-500 font-semibold uppercase tracking-wide">
        Features
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Core AI Agent Capabilities
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our AI agents bring powerful features that help your business grow,
        scale, and improve customer experience through intelligent automation.
      </p>
    </motion.div>


    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }} 
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            {feature.icon}
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-800"
          >
            {feature.title}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-2"
          >
            {feature.desc}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* our development  */}
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
          Our Development Process
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          A streamlined 4-step process to bring powerful AI agents into your
          business — from concept to continuous support.
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

             
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-green-600 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
   
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-emerald-500 font-semibold uppercase tracking-wide">
        Use Cases
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Practical Applications of AI Agents
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Discover how AI Agents can transform industries by automating tasks,
        personalizing experiences, and improving efficiency.
      </p>
    </motion.div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {useCases.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }} 
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-4"
            >
              <Icon className="w-12 h-12 text-emerald-500" />
            </motion.div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-gray-800"
            >
              {item.title}
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-2"
            >
              {item.description}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

 <section className="bg-emerald-500 py-12 md:py-16 rounded-xl mx-4 md:mx-16 my-10 relative overflow-hidden text-center">
      
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
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg group"
          >
            Contact Us Today
            <ArrowRight className="ml-3 h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
 <FAQWithCallout topic="ai_agents" />
    </>
  );
};

export default AIAgent;