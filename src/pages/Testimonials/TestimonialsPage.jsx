import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './TestimonialsPage.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ananya Sharma',
    location: 'Mumbai, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ca2ac64-fa17-4d57-8a28-6cbf2bbb3f1c.png',
    feedback: 'The trip was absolutely amazing! Everything was well organized and our guide was very friendly and knowledgeable. Highly recommend to anyone looking for adventure!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bengaluru, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6175e61b-c8d4-454e-b126-37bad60fd18c.png',
    feedback: 'Fantastic experience from start to finish! The destinations exceeded my expectations, and the local culture immersion was the best part of my travel.',
    rating: 4,
  },
  {
    name: 'Priya Singh',
    location: 'Delhi, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f14056a-3afa-4f81-b1f2-0d25f89702f3.png',
    feedback: 'Loved every moment of this tour! The team handled everything so professionally and thoughtfully. I felt safe and inspired throughout the trip.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    location: 'Pune, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e72e9212-5c82-498f-873d-415237e7d367.png',
    feedback: 'I have never felt so connected with nature! This travel company really cares about creating meaningful experiences. A must for any traveler seeking adventure.',
    rating: 4,
  },
  {
    name: 'Kavya Mehta',
    location: 'Chennai, India',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd261795-754b-4eac-a9ea-d1c323efbff2.png',
    feedback: 'The perfect balance of excitement and relaxation! Customer service was superb, and I will definitely book again with them for my next adventure.',
    rating: 5,
  }
];

const TestimonialsPage = () => {
  return (
    <>
      <Navbar />
      <div className="testimonials-page">
        <h1 className="testimonials-heading">Our Happy Travelers</h1>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card-full" key={i}>
              <img src={t.photo} alt={t.name} className="testimonial-img" />
              <div className="testimonial-info">
                <h3>{t.name}</h3>
                <p className="location">{t.location}</p>
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
