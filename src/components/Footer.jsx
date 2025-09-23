

import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description Column */}
          <div className="md:col-span-1">
            {/* Logo - Increased height for prominence */}
            <img
              src="/logo.png"
              alt="Bright Innovations Logo"
              className="h-16 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Bright Innovations delivers innovative digital solutions, from
              custom software development and web applications to UI/UX design,
              helping businesses grow efficiently with smart technology and
              customized strategies for lasting success in the digital age.
            </p>
            <div className="flex space-x-4 mt-6 text-xl">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Office Locations Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Office Locations
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold text-white">Pakistan 🇵🇰</div>
                <p className="text-sm">Askari 10, Lahore, 54000</p>
              </li>
              <li>
                <div className="font-semibold text-white">Canada 🇨🇦</div>
                <p className="text-sm">Mississauga, Canada</p>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#automation"
                  className="hover:text-white transition-colors"
                >
                  Automation
                </a>
              </li>
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#ai-agents"
                  className="hover:text-white transition-colors"
                >
                  AI Agents
                </a>
              </li>
             
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#ecommerce"
                  className="hover:text-white transition-colors"
                >
                  E-commerce
                </a>
              </li>
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#mobile-web-app"
                  className="hover:text-white transition-colors"
                >
                  Mobile and Web Application
                </a>
              </li>
            
            </ul>
          </div>

          {/* Popular Links Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Popular Links
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a href="#blogs" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li className="flex items-center">
                <FaChevronRight className="text-blue-500 text-xs mr-2" />
                <a
                  href="#policy"
                  className="hover:text-white transition-colors"
                >
                  Our Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Credits Row */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-sm flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0">
            &copy; Copyright 2025 All rights reserved
          </p>
          <p>
            Powered By:{" "}
            <span className="text-blue-500">Bright innovations.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
