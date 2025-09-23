
import { useParams, Link } from "react-router-dom";
import coffeeShopImg from "../assets/coffee-shop.webp";
import clothingStoreImg from "../assets/cloth.jpg";
import itCompanyImg from "../assets/it-company.webp";
import restaurantImg from "../assets/food-court.jpg";
import pharmacyImg from "../assets/pharmacy.jpg";

const businesses = [
  {
    id: 1,
    name: "Coffee Shop in Islamabad",
    location: "Islamabad",
    price: "PKR 5,000,000",
    category: "Food & Beverages",
    image: coffeeShopImg,
    description:
      "A profitable coffee shop located in the heart of Islamabad. Great foot traffic, fully furnished, and includes all equipment.",
    contact: "info@coffeeshop.com",
  },
  {
    id: 2,
    name: "Clothing Boutique in Lahore",
    location: "Lahore",
    price: "PKR 3,500,000",
    category: "Retail",
    image: clothingStoreImg,
    description:
      "Trendy boutique in Lahore with loyal customers and a strong social media presence.",
    contact: "contact@boutique.com",
  },
  {
    id: 3,
    name: "IT Services Company",
    location: "Rawalpindi",
    price: "PKR 12,000,000",
    category: "Technology",
    image: itCompanyImg,
    description:
      "Established IT company offering web, mobile, and cloud solutions. Includes 20+ active contracts.",
    contact: "ceo@itservices.com",
  },
  {
    id: 4,
    name: "Restaurant in DHA Lahore",
    location: "Lahore",
    price: "PKR 8,000,000",
    category: "Food & Beverages",
    image: restaurantImg,
    description:
      "Modern restaurant with high-end interiors and a prime DHA Lahore location.",
    contact: "info@restaurant.com",
  },
  {
    id: 5,
    name: "Pharmacy in Islamabad",
    location: "Islamabad",
    price: "PKR 6,500,000",
    category: "Healthcare",
    image: pharmacyImg,
    description:
      "Established pharmacy with licenses and steady customer flow.",
    contact: "pharmacy@biz.com",
  },
];

const BusinessDetail = () => {
  const { id } = useParams();
  const business = businesses.find((biz) => biz.id === parseInt(id));

  if (!business) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Business Not Found</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  // Find related businesses (same category, exclude current one)
  const relatedBusinesses = businesses
    .filter(
      (biz) => biz.category === business.category && biz.id !== business.id
    )
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white shadow rounded-xl p-8">
        {/* Main business details */}
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-72 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold mt-6">{business.name}</h2>
        <p className="text-gray-500 mt-2">{business.location}</p>
        <p className="text-gray-500">{business.category}</p>
        <p className="text-emerald-600 font-semibold text-lg mt-4">
          {business.price}
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed">
          {business.description}
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">Contact Information:</h3>
          <p className="text-gray-600">{business.contact}</p>
        </div>
        <Link
          to="/business-solutions/business-for-sale-listing"
          className="mt-8 inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300"
        >
          Back to Listings
        </Link>
      </div>

      {/* Related Businesses */}
      {relatedBusinesses.length > 0 && (
        <div className="max-w-7xl mx-auto mt-16 px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Businesses
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedBusinesses.map((biz) => (
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
                  <h4 className="text-lg font-semibold">{biz.name}</h4>
                  <p className="text-gray-500 text-sm">{biz.location}</p>
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
      )}
    </section>
  );
};

export default BusinessDetail;