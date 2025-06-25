import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Hero.css'; 

const slides = [
  {
    image: '/images/cruise.jpg',
    title: 'Discover the World with Us',
    subtitle: 'Your Journey Begins Here',
    description: 'Turn your dreams into destinations with our expertly crafted travel experiences',
    cta: 'Explore Destinations'
  },
  {
    image: '/images/img2.jpg',
    title: 'Escape the Ordinary',
    subtitle: 'Embrace the Extraordinary',
    description: 'From mountain peaks to crystal beaches, create memories that last a lifetime',
    cta: 'Plan Your Trip'
  },
  {
    image: '/images/img3.jpg',
    title: 'Cultural Adventures Await',
    subtitle: 'Experience Authentic Local Life',
    description: 'Immerse yourself in vibrant cultures and ancient traditions around the globe',
    cta: 'Book Now'
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay" />
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <p>{slide.description}</p>
            <div className="buttons">
              <button className="primary-btn">{slide.cta}</button>
             <Link to="/luxury-holidays">
                 <button className="outline-btn">View Packages</button>
            </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="nav-arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="nav-arrow right" onClick={nextSlide}>&#10095;</button>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentSlide ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
