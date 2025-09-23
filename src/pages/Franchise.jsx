import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import FAQWithCallout from "../components/FAQWithCallout";
import franchiseImg from "../assets/franchise.png";
import { franchises } from "../data/franchises";

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

const Franchise = () => {
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
            Franchise Opportunities
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Business Solutions » Franchise Opportunities
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
              src={franchiseImg}
              alt="Franchise opportunities"
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
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
              Franchise Opportunities
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Partner with Bright Innovations to unlock exclusive franchise
              opportunities. We provide end-to-end support including training,
              brand marketing, proven business models, and operational guidance
              to ensure your success. Take advantage of our established
              reputation and start building a profitable future today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Franchise Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Available Franchise Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchises.map((franchise) => (
              <div
                key={franchise.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={franchise.image}
                  alt={franchise.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{franchise.name}</h3>
                  <p className="text-gray-500 text-sm">{franchise.location}</p>
                  <p className="text-emerald-600 font-medium mt-2">
                    {franchise.investment}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {franchise.description}
                  </p>
                  <Link
                    to={`/franchise/${franchise.id}`}
                    className="mt-4 inline-block w-full text-center bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithCallout topic="franchise_opportunities" />
    </>
  );
};

export default Franchise;
