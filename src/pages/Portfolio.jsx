// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import contactBackground from "../assets/contact.png";

const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        // ✅ Correct backend port (5000 instead of 8000)
        const response = await fetch("http://localhost:5000/api/portfolio");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-2xl md:text-6xl lg:text-7xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Our Portfolio
          </motion.p>
        </section>
      </div>

      {/* Portfolio Items */}
      <section className="bg-transparent py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <motion.div
                key={item._id}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 mt-4 inline-flex items-center"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </a>
                )}
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
            "Now, ready to take your business to the next level? Let&apos;s
            connect and find out how our smart solutions can truly move your
            business forward."
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
    </>
  );
};

export default Portfolio;
