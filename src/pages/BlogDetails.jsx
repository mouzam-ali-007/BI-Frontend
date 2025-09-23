
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/blog" className="text-green-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-lg mb-6" />
      <p className="text-gray-500 mb-2">{post.date} · {post.author}</p>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-10">{post.content}</p>
      <Link
        to="/blog"
        className="inline-block text-green-600 font-semibold hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
