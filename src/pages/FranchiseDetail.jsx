import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { franchises } from "../data/franchises";

const FranchiseDetail = () => {
  const { id } = useParams();
  const franchise = franchises.find((f) => f.id === parseInt(id));

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!franchise) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">Franchise Not Found</h2>
        <Link
          to="/business-solutions/franchise-opportunities"
          className="mt-6 inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
        >
          Back to Franchise Opportunities
        </Link>
      </div>
    );
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", { ...form, franchise: franchise.name });
    setSubmitted(true);
  };

  // Pick related franchises (exclude current one)
  const relatedFranchises = franchises.filter((f) => f.id !== franchise.id).slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Franchise Details */}
      <img
        src={franchise.image}
        alt={franchise.name}
        className="w-full h-96 object-cover rounded-xl shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-900 mt-6">
        {franchise.name}
      </h1>
      <p className="text-gray-500 mt-2">{franchise.location}</p>
      <p className="text-emerald-600 font-semibold mt-2">
        {franchise.investment}
      </p>
      <p className="text-gray-700 mt-6 leading-relaxed">
        {franchise.description}
      </p>

      {/* Inquiry Form */}
      <div className="mt-12 bg-gray-50 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Inquire About This Franchise
        </h2>

        {submitted ? (
          <div className="text-green-600 font-semibold">
            ✅ Thank you! We’ll contact you shortly about{" "}
            <span className="font-bold">{franchise.name}</span>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>

      {/* Related Franchises */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Related Franchise Opportunities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {relatedFranchises.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
                <p className="text-emerald-600 font-medium mt-2">
                  {item.investment}
                </p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>
                <Link
                  to={`/franchise/${item.id}`}
                  className="mt-4 inline-block w-full text-center bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="text-center mt-12">
        <Link
          to="/business-solutions/franchise-opportunities"
          className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300"
        >
          ← Back to Franchise Opportunities
        </Link>
      </div>
    </div>
  );
};

export default FranchiseDetail;
