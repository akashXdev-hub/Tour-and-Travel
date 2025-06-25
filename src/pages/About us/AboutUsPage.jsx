import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Crafting unforgettable travel experiences for you.</p>
      </div>

      <div className="about-container">

        {/* Company Overview */}
        <section className="about-section">
          <div className="about-content-row">
            <div className="about-text">
              <h2>Company Overview</h2>
              <p>
                At <strong>Om Tours</strong>, we believe that travel is more than just a destination — it’s about the
                experiences, memories, and stories you bring home. With over 10+ years in the industry, we’ve helped
                thousands of travelers discover the world in comfort and style.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/company-overview.jpg" alt="Company Overview" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-section">
          <div className="about-content-row reverse">
            <div className="about-text">
              <h2>Our Mission, Vision & Background</h2>
              <p><strong>Mission:</strong> To deliver memorable, safe, and tailor-made travel experiences at great value.</p>
              <p><strong>Vision:</strong> To become the most trusted travel partner for holidaymakers across India and abroad.</p>
              <p><strong>Background:</strong> Founded in 2013, Om Tours started as a small family-run travel company and has grown into a full-service agency with global partnerships and personalized holiday services.</p>
            </div>
            <div className="about-image">
              <img src="/images/mission-vision.jpg" alt="Mission Vision" />
            </div>
          </div>
        </section>

        {/* Travel Expertise */}
        <section className="about-section">
          <div className="about-content-row">
            <div className="about-text">
              <h2>Our Travel Expertise</h2>
              <p>
                Whether it's luxury escapes, wildlife adventures, honeymoon getaways, or corporate travel — we’ve done it all.
                Our team of travel consultants are destination experts and passionate planners who ensure every journey is smooth, inspiring, and unforgettable.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/travel-expert.jpg" alt="Travel Expertise" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h3>Ready to plan your next journey?</h3>
          <p>Contact our experts today and let’s create something special together.</p>
          <a href="/contact" className="contact-btn">Get in Touch</a>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
