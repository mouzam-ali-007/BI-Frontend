import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bussinessBackground from "../assets/bussiness_background.jpg";
import FAQWithCallout from "../components/FAQWithCallout";
import listingImg from "../assets/bussniess-listing.webp";
import coffeeShopImg from "../assets/coffee-shop.webp";
import clothingStoreImg from "../assets/cloth.jpg";
import itCompanyImg from "../assets/it-company.webp";
import restaurantImg from "../assets/food-court.jpg";
import pharmacyImg from "../assets/pharmacy.jpg";
import ecommerceImg from "../assets/shopping-store.jpg";
import bookstoreImg from "../assets/bookstore.jpg";
import marketingAgencyImg from "../assets/Digital-Marketing-2.webp";
import gymImg from "../assets/gym.jpg";

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

const Listing = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `url(${bussinessBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Businesses for Sale Listing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » businessSolutions » Businesses for Sale Listing
          </motion.p>
        </section>
      </div>
      {/* services  */}
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
              src={listingImg}
              alt="AI Agent assisting a professional at a computer"
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
              Businesses for Sale Listing
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Bright Innovations' Unlock your business's potential with our
              curated selection of businesses for sale. From thriving local
              shops to high-growth tech firms, each listing is a turnkey
              opportunity for your next venture. We provide the connections and
              insights you need to make a smart, seamless acquisition.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Proven Revenue Streams",
                "Established Customer Base",
                "Turnkey Operations",
                "Favorable Market Position",
                "Untapped Market Opportunities",
                "Streamline Your Operations",
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
      {/* bussiness listing section  */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Search Bar */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Businesses for Sale
            </h2>
            <input
              type="text"
              placeholder="Search businesses..."
              className="w-full md:w-72 border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Grid of Listings */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                name: "Coffee Shop in Islamabad",
                location: "Islamabad",
                price: "PKR 5,000,000",
                category: "Food & Beverages",
                image: coffeeShopImg,
              },
              {
                id: 2,
                name: "Clothing Boutique in Lahore",
                location: "Lahore",
                price: "PKR 3,500,000",
                category: "Retail",
                image: clothingStoreImg,
              },
              {
                id: 3,
                name: "IT Services Company",
                location: "Rawalpindi",
                price: "PKR 12,000,000",
                category: "Technology",
                image: itCompanyImg,
              },
              {
                id: 4,
                name: "Restaurant in Bahria Town",
                location: "Rawalpindi",
                price: "PKR 8,000,000",
                category: "Food & Beverages",
                image: restaurantImg,
              },
              {
                id: 5,
                name: "Gym & Fitness Center",
                location: "Lahore",
                price: "PKR 6,200,000",
                category: "Health & Fitness",
                image: gymImg,
              },
              {
                id: 6,
                name: "E-Commerce Store",
                location: "Islamabad",
                price: "PKR 4,800,000",
                category: "Online Business",
                image: ecommerceImg,
              },
              {
                id: 7,
                name: "Bookstore & Café",
                location: "Lahore",
                price: "PKR 2,700,000",
                category: "Retail",
                image: bookstoreImg,
              },
              {
                id: 8,
                name: "Pharmacy in Islamabad",
                location: "Islamabad",
                price: "PKR 9,500,000",
                category: "Healthcare",
                image: pharmacyImg,
              },
              {
                id: 9,
                name: "Digital Marketing Agency",
                location: "Rawalpindi",
                price: "PKR 7,300,000",
                category: "Technology",
                image: marketingAgencyImg,
              },
            ].map((biz) => (
              <div
                key={biz.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={biz.image}
                  alt={biz.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{biz.name}</h3>
                  <p className="text-gray-500 text-sm">{biz.location}</p>
                  <p className="text-gray-500 text-sm">{biz.category}</p>
                  <p className="text-emerald-600 font-medium mt-2">
                    {biz.price}
                  </p>
                  <Link
                    to={`/business/${biz.id}`}
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

      {/* call of action  */}
      <section className="bg-emerald-600 py-12 md:py-16 rounded-xl mx-4 md:mx-16 my-10 relative overflow-hidden text-center">
        {/* Background Shapes */}
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
            "Now, ready to take your business to the next level? Let's connect
            and find out how our smart solutions can truly move your business
            forward."
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
      <FAQWithCallout topic="business_for_sale" />
    </>
  );
};

export default Listing;
