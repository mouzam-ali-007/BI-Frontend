import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";


const faqData = {
  "mobile-web": [
    {
      question: "Do you build apps for both iOS and Android?",
      answer:
        "Yes, we create cross-platform apps that work seamlessly on iOS and Android using modern frameworks.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Absolutely! We specialize in revamping outdated apps and websites with fresh UI/UX and modern technologies.",
    },
    {
      question: "What is the typical cost of a project?",
      answer:
        "The cost of a project depends on its complexity, features, and required technologies. We provide a detailed estimate after an initial consultation to fully understand your needs.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally after launch.",
    },
    {
      question: "How scalable are your web solutions?",
      answer:
        "Our apps and websites are designed with scalability in mind, ensuring they grow with your business.",
    },
  ],
  automation: [
    {
      question: "What processes can you automate?",
      answer:
        "We automate repetitive tasks like data entry, reporting, and notifications to save time and reduce errors.",
    },
     {
    question: "What's the typical implementation timeline for an automation project?",
    answer: "The timeline varies based on the complexity of the processes being automated. After an initial consultation to map your workflows, we'll provide a clear project plan and estimated timeline."
  },
    {
      question: "Do you integrate automation with existing tools?",
      answer:
        "Yes, we integrate with CRMs, ERPs, and third-party apps to ensure smooth workflows.",
    },
     {
    "question": "What's the typical implementation timeline for an automation project?",
    "answer": "The timeline varies based on the complexity of the processes being automated. After an initial consultation to map your workflows, we'll provide a clear project plan and estimated timeline."
  },
    {
      question: "Is automation secure?",
      answer:
        "We prioritize data security and compliance, ensuring automation is both safe and reliable.",
    },
  ],
  ai_agents: [
  {
    question: "Can AI agents handle complex customer support queries?",
    answer:
      "Yes, our AI agents use natural language processing and knowledge bases to handle both simple and complex queries, escalating to humans only when necessary.",
  },
  {
    question: "Do AI agents integrate with existing business tools like CRMs or ERPs?",
    answer:
      "Absolutely! We ensure seamless integration with CRMs, ERPs, chat platforms, and custom APIs for smooth workflows.",
  },
  {
    question: "Are AI agents secure and compliant with data privacy regulations?",
    answer:
      "Yes, we follow industry standards such as GDPR and HIPAA, and implement encryption and access control to ensure data security.",
  },
  {
    question: "Can AI agents learn and improve over time?",
    answer:
      "Indeed. Our AI agents use machine learning to continuously improve accuracy, personalization, and efficiency with every interaction.",
  },
  {
    question: "What kind of ROI can businesses expect from AI agents?",
    answer:
      "On average, companies see reduced support costs, higher conversion rates, and improved customer satisfaction within months of deployment.",
  },
],
  ecommerce: [
    {
      question: "Do you build custom online stores?",
      answer:
        "Yes, we design and develop tailored eCommerce platforms that fit your brand and products.",
    },
    {
      question: "Can you integrate multiple payment gateways?",
      answer:
        "Of course! We support PayPal, Stripe, local banks, and more for flexible checkout options.",
    },
    {
    question: "How do you handle product inventory and management?",
    answer: "We integrate robust inventory management systems that allow you to easily track stock levels, manage products, and fulfill orders efficiently."
  },
   {
    question: "What kind of security measures do you implement?",
    answer: "We prioritize security by implementing SSL certificates, secure payment gateways, and regular security audits to protect both your business and customer data."
  },
    {
      question: "Do you optimize eCommerce sites for SEO?",
      answer:
        "Yes, we ensure your online store is optimized for visibility and conversions.",
    },
  ],
  marketing: [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide SEO, social media marketing, paid ads, and email campaigns to boost online presence.",
    },
    {
      question: "Do you create content strategies?",
      answer:
        "Yes, we build custom strategies with blogs, videos, and social posts aligned with your goals.",
    },
     {
    question: "What sets your SEO services apart?",
    answer: "Our SEO strategy goes beyond keywords to include technical SEO, on-page optimization, and quality link-building to ensure long-term, sustainable growth."
  },
    {
    question: "How do you handle social media campaigns?",
    answer: "We manage all aspects of your social media presence, from content creation and scheduling to community engagement and performance analysis."
  },
    {
      question: "How do you measure marketing success?",
      answer:
        "We track KPIs like traffic, leads, and conversions with detailed reporting and insights.",
    },
  ],
   business_for_sale: [
    {
      question: "How do I list my business for sale?",
      answer:
        "You can submit your business details through our platform. Our team verifies listings to ensure quality opportunities for buyers.",
    },
    {
      question: "What types of businesses can be listed?",
      answer:
        "We accept listings across multiple industries including retail, IT, healthcare, hospitality, and more.",
    },
    {
      question: "How long does it take to sell a business?",
      answer:
        "The timeframe varies depending on the industry, valuation, and demand. On average, sales can take a few weeks to several months.",
    },
    {
      question: "Do you provide confidentiality for sellers?",
      answer:
        "Yes, seller confidentiality is a priority. Only qualified buyers gain access to detailed business information.",
    },
  ],

  franchise_opportunities: [
    {
      question: "What is the minimum investment required for a franchise?",
      answer:
        "Investment varies by franchise model. We provide opportunities for small, medium, and large-scale investors.",
    },
    {
      question: "Do you offer guidance in selecting a franchise?",
      answer:
        "Yes, our experts help you evaluate industries, investment levels, and growth potential before choosing.",
    },
    {
      question: "Are franchise opportunities available internationally?",
      answer:
        "We work with both local and global franchises to provide opportunities across different regions.",
    },
    {
      question: "Can I sell my franchise later?",
      answer:
        "Yes, franchise owners can resell their franchises, subject to franchisor approval and transfer guidelines.",
    },
  ],

  business_valuation: [
    {
      question: "Why is a business valuation important?",
      answer:
        "Valuation helps you understand the true worth of your business, essential for selling, merging, or raising funds.",
    },
    {
      question: "What factors affect business valuation?",
      answer:
        "Revenue, profit margins, assets, liabilities, industry trends, and market conditions are all considered.",
    },
    {
      question: "Do you provide certified valuation reports?",
      answer:
        "Yes, our valuation experts provide certified reports that can be used for sales, investments, and compliance.",
    },
    {
      question: "How long does a valuation process take?",
      answer:
        "The process typically takes 1-2 weeks depending on business size and complexity.",
    },
  ],

  broker_services: [
    {
      question: "What role does a business broker play?",
      answer:
        "A business broker connects buyers and sellers, manages negotiations, and ensures smooth transactions.",
    },
    {
      question: "Do I need a broker to sell my business?",
      answer:
        "While not mandatory, brokers significantly increase your chances of finding qualified buyers faster.",
    },
    {
      question: "How are business brokers compensated?",
      answer:
        "Brokers typically charge a commission, which is a percentage of the final sale price.",
    },
    {
      question: "Do brokers also help buyers?",
      answer:
        "Yes, brokers assist buyers in evaluating businesses, negotiating deals, and completing due diligence.",
    },
  ],

  advisory_resources: [
    {
      question: "What type of advisory services do you offer?",
      answer:
        "We provide strategy, compliance, financial, and operational advisory to help businesses grow sustainably.",
    },
    {
      question: "Do you provide free business resources?",
      answer:
        "Yes, we offer articles, guides, and templates to support entrepreneurs at no additional cost.",
    },
    {
      question: "Can startups also access advisory services?",
      answer:
        "Absolutely. Our services are tailored for startups, SMEs, and established businesses alike.",
    },
    {
      question: "Do you assist with regulatory compliance?",
      answer:
        "Yes, our experts help ensure your business meets industry and legal compliance requirements.",
    },
  ],

};


const topicDescriptions = {
  "mobile-web":
    "At Bright Innovations, we craft world-class mobile and web applications tailored to your business needs. From user-friendly websites to powerful mobile apps, we ensure your digital presence is future-ready.",
  automation:
    " At Bright Innovations, we help businesses save time and resources by automating repetitive workflows. Our automation solutions reduce errors, boost productivity, and let your team focus on what matters most.",
  ecommerce:
    "At Bright Innovations, we builds scalable, secure, and high-performing eCommerce platforms. From product management to seamless checkouts, we create online stores that drive sales and customer loyalty.",
  marketing:
    " At Bright Innovations, Our digital marketing experts help brands grow with data-driven strategies. From SEO to paid ads, we ensure your business reaches the right audience at the right time.",
  ai_agents:
    " At Bright Innovations, Our AI agents empower businesses with intelligent automation, smart decision-making, and 24/7 customer support. They continuously learn, adapt, and scale to deliver efficiency and growth.",
     business_for_sale:
    "We connect entrepreneurs and investors with verified business opportunities for sale. From small startups to established companies, explore listings that match your goals.",
  franchise_opportunities:
    "Discover franchise opportunities tailored to your budget and industry. We help you invest in proven business models and achieve growth with expert guidance.",
  business_valuation:
    "Our valuation and consulting services help you determine the true worth of your business. Make informed decisions with detailed financial and market insights.",
  broker_services:
    "Our experienced business brokers simplify buying and selling processes. From negotiations to paperwork, we ensure smooth transactions.",
  advisory_resources:
    "We provide advisory services and business resources to guide entrepreneurs at every stage. From strategy to compliance, we help businesses thrive.",
};


const FAQWithCallout = ({ topic = "mobile-web" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData[topic] || [];
  const description = topicDescriptions[topic] || "";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:pr-10"
        >
          <h3 className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-2">
            OUR TEAM IS HERE TO ASSIST YOU
          </h3>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
            Expert Guidance You Can Trust
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            {description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-medium rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 group"
          >
            Contact Us
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Right Side - FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-md overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full flex items-center justify-between p-5 text-left font-semibold transition-all duration-300 ${
                  openIndex === index
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <HelpCircle
                    className={`w-5 h-5 mr-3 ${
                      openIndex === index ? "text-white" : "text-emerald-600"
                    }`}
                  />
                  <span>{faq.question}</span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-5 pb-5 pt-2 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQWithCallout;
