import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './BlogPage.css';

const blogData = {
  articles: [
    {
      title: "7 Breathtaking Train Journeys in India",
      image: "/images/blog1.jpg",
      excerpt: "Experience India's diverse landscapes from the comfort of a train.",
      link: "#"
    },
    {
      title: "Top 5 Festivals Worth Traveling For",
      image: "/images/blog2.jpg",
      excerpt: "Plan your trip around these vibrant cultural events.",
      link: "#"
    }
  ],
  guides: [
    {
      title: "A Complete Guide to Exploring Kerala",
      image: "/images/blog3.jpg",
      excerpt: "From houseboats to spice plantations, everything you need to plan your trip.",
      link: "#"
    },
    {
      title: "Ultimate Goa Travel Guide",
      image: "/images/blog4.jpg",
      excerpt: "Beaches, food, nightlife — here’s how to do Goa right.",
      link: "#"
    }
  ],
  tips: [
    {
      title: "10 Packing Tips for Stress-Free Travel",
      image: "/images/blog5.jpg",
      excerpt: "Make your next vacation easier with these smart packing hacks.",
      link: "#"
    },
    {
      title: "Travel Insurance: Why It’s a Must",
      image: "/images/blog6.jpg",
      excerpt: "Don’t leave without it — here's what to know before you go.",
      link: "#"
    }
  ]
};

const BlogSection = ({ title, items }) => (
  <section className="blog-section">
    <h2>{title}</h2>
    <div className="blog-grid">
      {items.map((item, idx) => (
        <div className="blog-card" key={idx}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <a href={item.link}>Read More →</a>
        </div>
      ))}
    </div>
  </section>
);

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="blog-hero">
        <h1>Travel Blog</h1>
        <p>Your go-to hub for tips, guides, and travel inspiration.</p>
      </div>

      <div className="blog-container">
        <BlogSection title="Travel Articles" items={blogData.articles} />
        <BlogSection title="Destination Guides" items={blogData.guides} />
        <BlogSection title="Travel Tips" items={blogData.tips} />
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
