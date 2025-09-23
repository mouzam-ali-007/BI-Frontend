import { motion } from "framer-motion";
import backgroundBanner from "../assets/background-banner.jpg";

const PageBanner = ({
  title = "Empowering Your Future with Tech Solutions",
  subtitle = "",
  bgImage = backgroundBanner,
  breadcrumbs = [],
  centered = false,
  height = "full",
}) => {
  const heightClasses =
    height === "short" ? "py-12 md:py-16" : "py-16 md:py-24";
  const textAlignment = centered ? "text-center mx-auto" : "text-left";

  return (
    <section
      className="relative isolate overflow-hidden rounded-lg mx-4" 
      aria-label={`${title} banner`}
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content Container */}
      <div className={`max-w-7xl mx-auto px-4 py-8 md:px-8 ${heightClasses}`}>
        {/* Breadcrumbs (will be left-aligned on desktop by default) */}
        {breadcrumbs?.length > 0 && !centered && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-200">
              {breadcrumbs.map((bc, i) => (
                <li key={i} className="flex items-center">
                  <a
                    href={bc.href}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {bc.label}
                  </a>
                  {i < breadcrumbs.length - 1 && (
                    <span className="mx-2 opacity-70">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        {/* Main Text and Button Container */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-center md:text-left mx-auto md:mx-0"}`}
        >
          <h1 className="text-3xl md:text-2xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base md:text-lg text-gray-200 leading-relaxed">
              {subtitle}
            </p>
          )}
          {/* "Get a free quote" button */}
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-500 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-emerald-600"
            >
              Get a free quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;