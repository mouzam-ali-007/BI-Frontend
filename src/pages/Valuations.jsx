import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import FAQWithCallout from "../components/FAQWithCallout";
import valuationImg from "../assets/valution.jpg";

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

const Valuations = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{ backgroundImage: `url(${bussinessBackground})` }}
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

      {/* Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={valuationImg}
              alt="Business valuation consulting"
              className="rounded-2xl shadow-xl cursor-pointer w-full md:w-[90%]"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(34,197,94,0.3)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-emerald-500 font-semibold uppercase tracking-wide">
              Business Solutions
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Expert Valuations & Consulting
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              At <span className="font-semibold text-emerald-600">Bright Innovations</span>,
              we provide accurate and comprehensive business valuations to help you
              understand your company’s true worth. Whether you are planning to sell,
              acquire, or seek investors, our consulting ensures strategic,
              data-driven decisions.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Accurate Business Valuation Reports",
                "Investor-Ready Financial Analysis",
                "Mergers & Acquisitions Advisory",
                "Exit Planning & Strategy",
                "Growth & Expansion Consulting",
                "Confidential & Professional Service",
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-emerald-600">Bright Innovations?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We go beyond numbers — combining market expertise, financial analysis, and
            strategic consulting to deliver insights that drive real business growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Proven Expertise", desc: "Years of experience in financial consulting & valuations." },
              { title: "Tailored Insights", desc: "Customized solutions aligned with your unique goals." },
              { title: "Confidential & Trusted", desc: "Your business information is secure with us." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-emerald-600">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-2xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-emerald-600">Consulting Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Initial Consultation", desc: "Understanding your goals & business needs." },
              { step: "02", title: "Data Analysis", desc: "Reviewing financials, assets & market positioning." },
              { step: "03", title: "Valuation Report", desc: "Delivering detailed insights & accurate valuations." },
              { step: "04", title: "Strategic Guidance", desc: "Advising on best paths for growth or exit." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-emerald-500 font-bold text-2xl">{item.step}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 py-16 rounded-2xl mx-4 md:mx-20 my-12 relative overflow-hidden text-center">
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
            Ready to discover your business’s true value? Let us guide you with
            expert valuation reports and consulting tailored to your goals.
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
      <FAQWithCallout topic="business_valuation" />
    </>
  );
};

export default Valuations;
