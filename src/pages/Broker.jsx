import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import brokerImg from "../assets/bussiness-broker.png";
import FAQWithCallout from "../components/FAQWithCallout";

// Animation Variants
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

const Broker = () => {
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
            Business Broker Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Business Solutions » Business Broker Services
          </motion.p>
        </section>
      </div>

      {/* Service Overview */}
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
              src={brokerImg}
              alt="Business Broker"
              className="rounded-xl shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 30px rgba(34,197,94,0.3)",
              }}
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
              Business Solutions
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Helping You Buy & Sell Businesses
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our expert business brokers connect buyers and sellers with
              tailored strategies. From business valuation and confidential
              listings to negotiations and closing, we make the entire process
              smooth, profitable, and stress-free.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Confidential Business Listings",
                "Accurate Business Valuations",
                "Buyer & Seller Matchmaking",
                "Expert Negotiations",
                "Streamlined Sale Process",
                "End-to-End Guidance",
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
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Broker Services?
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Partner with us for professional, confidential, and results-driven
            business brokerage. Our expertise ensures you achieve the best
            outcomes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "20+ Years Experience", desc: "Trusted expertise in business transactions." },
              { title: "Wide Buyer Network", desc: "Access to a vast pool of potential buyers." },
              { title: "Confidential Process", desc: "Discreet handling of every business deal." },
              { title: "Tailored Strategies", desc: "Custom solutions for your unique needs." },
              { title: "Legal & Financial Support", desc: "End-to-end advisory and compliance." },
              { title: "Proven Track Record", desc: "Hundreds of successful transactions closed." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-emerald-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
            {[
              "Business Valuation",
              "Confidential Marketing",
              "Buyer Screening",
              "Negotiation & Closing",
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-emerald-600 text-3xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mt-4">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-emerald-600 py-12 md:py-16 rounded-xl mx-4 md:mx-16 my-10 relative overflow-hidden text-center">
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
            "Looking to buy or sell a business? Our expert brokers will guide you
            every step of the way to ensure a smooth and profitable transaction."
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

      {/* FAQ Section */}
      <FAQWithCallout topic="broker_services" />
    </>
  );
};

export default Broker;
