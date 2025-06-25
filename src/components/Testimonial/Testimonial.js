import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const testimonials = [
 {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Mumbai, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ca2ac64-fa17-4d57-8a28-6cbf2bbb3f1c.png',
    feedback: 'The trip was absolutely amazing! Everything was well organized and our guide was very friendly and knowledgeable. Highly recommend to anyone looking for adventure!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Bengaluru, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6175e61b-c8d4-454e-b126-37bad60fd18c.png',
    feedback: 'Fantastic experience from start to finish! The destinations exceeded my expectations, and the local culture immersion was the best part of my travel.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Priya Singh',
    location: 'Delhi, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f14056a-3afa-4f81-b1f2-0d25f89702f3.png',
    feedback: 'Loved every moment of this tour! The team handled everything so professionally and thoughtfully. I felt safe and inspired throughout the trip.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Arjun Patel',
    location: 'Pune, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e72e9212-5c82-498f-873d-415237e7d367.png',
    feedback: 'I have never felt so connected with nature! This travel company really cares about creating meaningful experiences. A must for any traveler seeking adventure.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Kavya Mehta',
    location: 'Chennai, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd261795-754b-4eac-a9ea-d1c323efbff2.png',
    feedback: 'The perfect balance of excitement and relaxation! Customer service was superb, and I will definitely book again with them for my next adventure.',
    rating: 5,
  }
];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-icons">
          {i < rating ? 'star' : 'star_border'}
        </span>
      ))}
    </div>
  );
}

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 900) setCardsPerView(3);
      else if (window.innerWidth >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - cardsPerView);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [cardsPerView, currentIndex]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const translateX = sliderWrapperRef.current
    ? (sliderWrapperRef.current.children[0].offsetWidth + 24) * currentIndex
    : 0;

  return (
    <section className="testimonial-section">
      <h2 className="section-header">Client Reviews</h2>
      <div className="slider-container">
        <div
          className="slider-wrapper"
          ref={sliderWrapperRef}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {testimonials.map(({ id, name, location, photo, feedback, rating }) => (
            <article key={id} className="testimonial-card">
              <p className="review-text">{feedback}</p>
              <StarRating rating={rating} />
              <div className="client-info">
                <img src={photo} alt={name} className="client-image" />
                <div>
                  <p className="client-name">{name}</p>
                  <p className="client-location">{location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="nav-button nav-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span className="material-icons md-24">chevron_left</span>
        </button>
        <button
          className="nav-button nav-next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <span className="material-icons md-24">chevron_right</span>
        </button>
      </div>

      <div className="slider-indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`indicator-dot${currentIndex === idx ? ' active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      <div className="view-more-container">
        <a href="/testimonials" className="view-more-button">
          <span style={{ marginRight: "6px" }}>✨</span> View More Testimonials
        </a>
      </div>
    </section>
  );
}

export default TestimonialSlider;
