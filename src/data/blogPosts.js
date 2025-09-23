import React from "react";
import webImg from "../assets/web.png";
import aiImg from "../assets/AI trends.jpg";
import businessImg from "../assets/bussiness_trends.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Web Development Trends 2025",
    excerpt:
      "Discover the latest trends in web development for 2025, including AI, serverless, and more.",
    content:
      "Full content of Web Development Trends 2025 goes here. You can expand this with multiple paragraphs, images, etc.",
    image: webImg, 
    date: "Aug 20, 2025",
    author: "Syeda Faran",
  },
  {
    id: 2,
    title: "AI trends",
    excerpt:
      "AI-powered solutions are revolutionizing customer support by automating routine tasks, providing instant assistance, and personalizing interactions to boost satisfaction and efficiency.",
    content:
      "Detailed guide about AI tools, setup and best practices...",
    image: aiImg, 
    date: "Aug 18, 2025",
    author: "Bright Innovations",
  },
  {
    id: 3,
    title: "The Future of eCommerce in Pakistan",
    excerpt:
      "How businesses in Pakistan can leverage eCommerce trends to scale globally.",
    content:
      "Pakistan’s eCommerce is booming. Here is how startups and enterprises can take advantage...",
    image: businessImg, 
    date: "Aug 15, 2025",
    author: "Team Bright",
  },
];

export default blogPosts;
