// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaHandshake className="text-emerald-500 text-4xl" />,
    title: "Trusted Partnerships",
    description: "We build long-term relationships based on trust, transparency, and mutual growth.",
  },
  {
    icon: <FaLightbulb className="text-emerald-500 text-4xl" />,
    title: "Innovative Solutions",
    description: "Our team delivers creative, modern, and result-driven strategies tailored for you.",
  },
  {
    icon: <FaShieldAlt className="text-emerald-500 text-4xl" />,
    title: "Quality & Security",
    description: "We follow industry-leading standards to ensure high-quality and secure results.",
  },
  {
    icon: <FaHeadset className="text-emerald-500 text-4xl" />,
    title: "24/7 Support",
    description: "Our experts are always available to assist you whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We stand out by delivering exceptional value, reliability, and results for our clients.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
