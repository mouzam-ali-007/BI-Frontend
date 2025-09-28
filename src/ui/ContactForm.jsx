/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState('Choose Service');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const services = [
    'AI Agents',
    'Automation',
    'Custom Software and Website Development',
    'Ecommerce',
    'Mobile and Web Application',
    'Digital Marketing',
    'Business Solutions',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedService === 'Choose Service') {
      setResponseMessage('Please select a service.');
      return;
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: selectedService,
      message: formData.message,
    };

    try {
      setLoading(true);
      setResponseMessage('');
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setSelectedService('Choose Service');
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {

      setResponseMessage('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gray-50 min-h-screen py-20 px-6 md:px-12 lg:px-24 xl:px-48 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 overflow-hidden">
      {/* Left section skipped for brevity */}

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-8 lg:p-12 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Connect!</h2>
        <p className="text-gray-600 mb-10 text-center">We'd love to hear from you. Please fill out the form below.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full md:w-1/2 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-1/2 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-1/2 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
            <div className="relative w-full md:w-1/2" ref={dropdownRef}>
              <button
                type="button"
                className="w-full flex justify-between items-center px-5 py-3 border border-gray-300 rounded-xl text-left text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedService}</span>
                <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <IoIosArrowDown />
                </motion.span>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`px-5 py-3 text-gray-800 hover:bg-green-50 cursor-pointer ${selectedService === service ? 'bg-green-100 font-semibold' : ''
                        }`}
                      onClick={() => handleServiceChange(service)}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Enter your message..."
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-200"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {responseMessage && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">{responseMessage}</p>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
