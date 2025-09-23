import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const services = [
  { id: 1, title: "Mobile and Web Development", path: "/services/mobile-web-development" },
  { id: 2, title: "AI Agents", path: "/services/ai-agents" },
  { id: 3, title: "E-commerce", path: "/services/e-commerce" },
  { id: 4, title: "Automation", path: "/services/automation" },
  { id: 5, title: "Digital Marketing", path: "/services/digital-marketing" },
];

const businessSolutions = [
  { id: 1, title: "Businesses for Sale Listing", path: "/business-solutions/business-for-sale-listing" },
  { id: 2, title: "Franchise Opportunities", path: "/business-solutions/franchise-opportunities" },
  { id: 3, title: "Business Valuations / Consulting", path: "/business-solutions/business-valuations-consulting" },
  { id: 4, title: "Business Broker Services", path: "/business-solutions/business-broker-services" },
  { id: 5, title: "Business Advisory & Resources", path: "/business-solutions/business-advisory-resources" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Services", to: "/services", isDropdown: true, dropdownItems: services },
    { name: "Business Solutions", to: "/business", isDropdown: true, dropdownItems: businessSolutions },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" }
  ];

  const isSectionActive = (section) => location.pathname.startsWith(section);

  return (
    <header className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-white cursor-pointer">
          Bright <span className="text-blue-300">Innovations</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  className={`flex items-center px-3 py-2 transition ${
                    isSectionActive(item.to)
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                      : "hover:text-blue-300"
                  }`}
                >
                  {item.name}
                  <FaChevronDown className="ml-1 text-xs" />
                </button>

                {dropdown === item.name && (
                  <div className="absolute top-full -left-2 mt-0 w-56 bg-gray-800 text-white shadow-lg rounded-b-md z-50">
                    {item.dropdownItems.map((subItem) => (
                      <NavLink
                        key={subItem.id}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                            isActive ? "bg-blue-500 text-white font-semibold" : ""
                          }`
                        }
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 transition ${
                    isActive ? "text-blue-400 font-semibold border-b-2 border-blue-400" : "hover:text-blue-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}

          <Link
            to="/contact"
            className="ml-4 px-6 py-2 rounded-full bg-emerald-500 text-white font-bold shadow-lg hover:bg-blue-300 transition"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen((v) => !v)} className="p-2 text-white">
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 text-white border-t border-gray-700">
          <div className="flex flex-col px-4 py-4">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="space-y-2">
                  <button
                    className={`flex justify-between items-center w-full py-2 ${
                      isSectionActive(item.to)
                        ? "text-blue-400 font-semibold"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() =>
                      setDropdown(dropdown === item.name ? null : item.name)
                    }
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        dropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdown === item.name && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <NavLink
                          key={subItem.id}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block w-full text-left text-gray-400 text-sm hover:text-blue-400 ${
                              isActive ? "text-blue-300 font-semibold" : ""
                            }`
                          }
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `py-2 text-left ${
                      isActive ? "text-blue-400 font-semibold" : "hover:bg-gray-700"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            )}

            <Link
              to="/contact"
              className="mt-2 px-4 py-2 rounded-full bg-gray-700 text-white font-bold shadow-lg hover:bg-blue-300 transition"
              onClick={() => setOpen(false)}
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
