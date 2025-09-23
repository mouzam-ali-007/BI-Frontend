import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from './ui/ScrollToTop';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import MobileWeb from './pages/MobileWeb';
import Services from './pages/Services';
import AIAgent from './pages/AIAgent';
import Automation from './pages/Automation';
import Ecommerce from './pages/Ecommerce';
import Marketing from './pages/Marketing';
import Bussiness from './pages/Bussiness';
import Broker from './pages/Broker';
import Listing from './pages/Listing';
import Franchise from './pages/Franchise';
import Advisory from './pages/Advisory';
import Valuations from './pages/Valuations';
import BusinessDetail from './pages/BusinessDetail';
import FranchiseDetail from './pages/FranchiseDetail';
import Portfolio from './pages/Portfolio';
import Loader from './ui/Loader';


function App() {
  // Set the initial state to true so the loader shows immediately
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Loader loading={loading} />
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />

              <Route path="/services" element={<Services />}>
                <Route path="mobile-web-development" element={<MobileWeb />} />
                <Route path="aI-agents" element={<AIAgent />} />
                <Route path="automation" element={<Automation />} />
                <Route path="e-Commerce" element={<Ecommerce />} />
                <Route path="digital-marketing" element={<Marketing />} />
              </Route>

              <Route path="/business-solutions" element={<Bussiness />}>
                <Route path="business-broker-services" element={<Broker />} />
                <Route path="business-for-sale-listing" element={<Listing />} />
                <Route path="franchise-opportunities" element={<Franchise />} />
                <Route path="business-advisory-resources" element={<Advisory />} />
                <Route path="business-valuations-consulting" element={<Valuations />} />
              </Route>

              <Route path="/business/:id" element={<BusinessDetail />} />
              <Route path="/franchise/:id" element={<FranchiseDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </BrowserRouter>
        </motion.div>
      )}
    </>
  );
}

export default App;