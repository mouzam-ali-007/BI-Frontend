

import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import men1 from '../assets/men_1.jpg';
import women1 from '../assets/women_1.jpg';
import men2 from '../assets/men_2.jpg';
import women2 from '../assets/women_2.jpg';

const teamMembers = [
  { id: 1, image: men1, alt: 'Team Member 1' },
  { id: 2, image: women1, alt: 'Team Member 2' },
  { id: 3, image: men2, alt: 'Team Member 3' },
  { id: 4, image: women2, alt: 'Team Member 4' },
];

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const carouselVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
};

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative py-16">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        <motion.div 
          className="max-w-6xl mx-auto px-4"
          variants={carouselVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {teamMembers.map(member => (
              <div key={member.id} className="p-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default OurTeam;