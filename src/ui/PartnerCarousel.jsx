import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client_1 from "../assets/client_1.png";
import client_2 from "../assets/client_2.png";
import client_3 from "../assets/client_3.png";
import client_4 from "../assets/client_4.png";
import client_5 from "../assets/client_5.jpg";

const PartnerCarousel = () => {
  const partners = [
    { name: "Client 1", logo: client_1 },
    { name: "Client 2", logo: client_2 },
    { name: "Client 3", logo: client_3 },
    { name: "Client 4", logo: client_4 },
    { name: "Client 5", logo: client_5 },
    { name: "Client 6", logo: client_1 },
    { name: "Client 7", logo: client_2 },
    { name: "Client 8", logo: client_3 },
    { name: "Client 9", logo: client_4 },
    { name: "Client 10", logo: client_5 },
  ];

  const partnersSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000, 
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      className="py-8 bg-gray-100 rounded-xl shadow-md mx-4 md:mx-auto md:max-w-6xl -mt-24 md:-mt-12 z-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        {/* Statistics Section with a new responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">10+</h3>
            <p className="text-base text-gray-600">Team Members</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">30+</h3>
            <p className="text-base text-gray-600">Projects Completed</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">30+</h3>
            <p className="text-base text-gray-600">Satisfied Clients</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">5+</h3>
            <p className="text-base text-gray-600">Countries</p>
          </div>
        </div>

        {/* Partners Carousel Section */}
        <div className="w-full mx-auto mt-8">
          <Slider {...partnersSettings}>
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center p-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-14 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnerCarousel;