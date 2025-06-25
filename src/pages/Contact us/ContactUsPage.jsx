import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or bookings.</p>
      </section>

      <section className="contact-section">
        <div className="contact-form-area">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <select required>
              <option>General Inquiry</option>
              <option>Package Information</option>
              <option>Booking Support</option>
              <option>Complaint/Feedback</option>
             <option>Other</option>
            </select>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-info-area">
          <h2>Get in Touch</h2>
          <p>We’re here to help you plan the perfect trip. Contact us through any of the following methods:</p>

          <div className="contact-detail">
            📞 <strong>Phone:</strong>
            <p>+91 98765 43210<br />+91 87654 32109</p>
          </div>

          <div className="contact-detail">
            📧 <strong>Email:</strong>
            <p>info@omtours.com<br />bookings@omtours.com</p>
          </div>

          <div className="contact-detail">
            📍 <strong>Address:</strong>
            <p>123 Travel Street<br />New Delhi<br /> India</p>
          </div>

          <div className="contact-detail">
            🕒 <strong>Business Hours:</strong>
            <p>Mon–Sun: 9:00 AM – 7:00 PM<br />Sunday: 10:00 AM – 5:00 PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;
