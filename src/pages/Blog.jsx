
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import contactBackground from '../assets/contact.png';
import SearchBar from '../ui/SearchBar';





import fetchPosts from "../data/blogPosts";

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } }
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);


  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) return <p>Loading posts...</p>;
  console.log("filteredPosts", filteredPosts)
  return (
    <>

      <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-4 text-center"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <section className="relative z-20 mt-20 md:mt-0">
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Essential eCommerce Trends for 2025
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Home » Essential eCommerce Trends for 2025
          </motion.p>
        </section>
      </div>


      <div className="my-8">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Blogs</h2>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date} · {post.author}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No blogs found for “{searchQuery}”.</p>
        )}
      </section>
    </>
  );
};

export default Blog;
