import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import men1 from "../assets/men_1.jpg";
import men2 from "../assets/men_2.jpg";
import women1 from "../assets/women_1.jpg";
import women2 from "../assets/women_2.jpg";
import women3 from "../assets/women_3.jpg";

const testimonials = [
  {
    name: "Ali Khan",
    feedback: "Bright Innovations delivered an exceptional mobile app that streamlined our operations. Their team was professional, creative, and a pleasure to work with.",
    avatar: men1,
  },
  {
    name: "Sarah Ahmed",
    feedback: "Our new website is not only stunning but also incredibly fast and user-friendly. The team's expertise in web development is truly top-notch. They guided us every step of the way.",
    avatar: women1,
  },
  {
    name: "Usman Tariq",
    feedback: "I was impressed by the wide range of technological solutions they offered. They helped us find the perfect blend of tools to grow our online presence, quickly and efficiently.",
    avatar: men2,
  },
  {
    name: "Ayesha Malik",
    feedback: "The website they built for us has significantly increased our customer engagement. Their project management and communication were second to none.",
    avatar: women2,
  },
  {
    name: "Zainab Ali",
    feedback: "Exceptional service from start to finish. They were knowledgeable, patient, and truly had our best interests at heart during the development process. A great experience!",
    avatar: women3,
  },
];


const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -right-8 -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg z-10 hover:bg-gray-300 transition-colors hidden md:block"
    onClick={onClick}
    aria-label="Next Testimonial"
  >
    <ChevronRight className="w-6 h-6 text-gray-700" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -left-8 -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg z-10 hover:bg-gray-300 transition-colors hidden md:block"
    onClick={onClick}
    aria-label="Previous Testimonial"
  >
    <ChevronLeft className="w-6 h-6 text-gray-700" />
  </button>
);

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Text, and Button */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <motion.p
            className="text-emerald-500 font-semibold mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonial
          </motion.p>
          <motion.h2
            className="text-4xl md:text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients Say!
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-lg md:max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here’s what our valued clients have to say about doing business with Bright Innovations. Real success and satisfaction stories.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="self-center md:self-start"
          >
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              Read More
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Testimonial Carousel */}
        <div className="w-full relative px-12">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <motion.div
                  className="bg-gray-50 p-8 rounded-2xl shadow-xl border-t-4 border-blue-400 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-500 opacity-20 transform -scale-x-100" />
                  <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 mr-4"
                    />
                    <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;