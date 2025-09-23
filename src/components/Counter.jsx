import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const frameRate = 1000 / 60; 
    const increment = (end / duration) * frameRate;

    const animate = () => {
      if (!ref.current) return;
      
      start += increment;
      if (start >= end) {
        start = end;
        cancelAnimationFrame(animationFrameId.current);
      }
      setCount(Math.floor(start));
      if (start < end) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };
    
    // Change the threshold to a smaller value
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrameId.current = requestAnimationFrame(animate);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.1 } // Updated threshold
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [value, duration]);

  return (
    <motion.h4 
      ref={ref}
      className="text-3xl font-bold"
    >
      {count}+
    </motion.h4>
  );
};

Counter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.number,
};

export default Counter;