import React from 'react';
import './TravelInspirations.css';

const blogData = [
  {
    title: 'Top 10 Hidden Gems in India',
    image: "/images/img4.jpg",
    excerpt: 'Explore breathtaking destinations that are off the beaten path.',
    link: '#',
  },
  {
    title: 'Why You Should Try a Cruise Holiday',
    image: "/images/img2.jpg",
    excerpt: 'Luxury, relaxation, and adventure all in one unforgettable journey.',
    link: '#',
  },
  {
    title: 'Weekend Getaways Near Delhi',
    image: "/images/img3.jpg",
    excerpt: 'Short breaks that feel like long vacations.',
    link: '#',
  },
];

const TravelInspirations = () => {
  return (
    <section className="travel-inspirations">
      <h2 className="inspirations-title">Travel Inspirations</h2>

      <div className="inspirations-grid">
        {blogData.map((blog, index) => (
          <div className="inspiration-card" key={index}>
            <img src={blog.image} alt={blog.title} className="inspiration-image" />
            <h3 className="inspiration-title">{blog.title}</h3>
            <p className="inspiration-excerpt">{blog.excerpt}</p>
            <a href={blog.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>

      <div className="quick-contact">
        <a 
          className="contact-button fancy-button" 
          href="/enquiry"
          aria-label="Go to enquiry page"
        >
          <span className="button-icon">📬</span>
          <span className="button-text">Send Enquiry</span>
        </a>
      </div>
    </section>
  );
};

export default TravelInspirations;
