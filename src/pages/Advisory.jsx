import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import FAQWithCallout from '../components/FAQWithCallout';
import adviceImg from "../assets/advice.jpg";
import itCompanyImg from "../assets/it-company.webp"
import pharmacyImg from "../assets/pharmacy.jpg"
import retailImg from "../assets/retail.jpg"

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

const Advisory = () => {
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
            Business Advisory & Resources
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Business Solutions » Business Advisory & Resources
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
              src={adviceImg}
              alt="Advisory Resources"
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
              Business Solutions
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Expert Guidance for Your Business
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our advisory services are designed to help you navigate challenges,
              optimize operations, and seize growth opportunities. From financial
              planning to strategic insights, we empower businesses with the tools
              and resources needed to succeed in today’s competitive market.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Strategic Business Planning",
                "Financial Forecasting",
                "Market Analysis Reports",
                "Operational Efficiency Audits",
                "Leadership & Team Coaching",
                "Growth & Expansion Strategies",
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

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Downloadable Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Growth Guide",
                desc: "Step-by-step strategies for scaling your business in competitive markets.",
                file: "/downloads/business-growth-guide.pdf",
              },
              {
                title: "Financial Planning Toolkit",
                desc: "Customizable financial templates and budgeting frameworks.",
                file: "/downloads/financial-planning-toolkit.pdf",
              },
              {
                title: "Risk Management Checklist",
                desc: "A practical checklist to identify and mitigate business risks.",
                file: "/downloads/risk-management-checklist.pdf",
              },
            ].map((resource, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.desc}</p>
                </div>
                <a
                  href={resource.file}
                  download
                  className="mt-auto inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                >
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies / Success Stories */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
      Success Stories
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          company: "Retail Startup",
          result: "Achieved 150% revenue growth",
          story:
            "We helped a small retail startup optimize operations, improve supply chain management, and expand into new markets.",
     image: retailImg,
        },
        {
          company: "Tech Firm",
          result: "Secured $2M in funding",
          story:
            "By building a strong financial model and investor pitch deck, we guided a SaaS company to secure critical funding.",
           image: itCompanyImg,
        },
        {
          company: "Manufacturing Business",
          result: "Reduced costs by 30%",
          story:
            "Through process automation and operational efficiency audits, we enabled a manufacturer to save costs and scale faster.",
             image: pharmacyImg,
        },
      ].map((caseStudy, i) => (
        <motion.div
          key={i}
          className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={caseStudy.image}
            alt={caseStudy.company}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {caseStudy.company}
            </h3>
            <p className="text-emerald-600 font-medium mt-1">{caseStudy.result}</p>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {caseStudy.story}
            </p>
          </div>
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
            "Now, ready to take your business to the next level? Let's connect and
            find out how our smart solutions can truly move your business forward."
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
      <FAQWithCallout topic="advisory_resources" />
    </>
  );
};

export default Advisory;
