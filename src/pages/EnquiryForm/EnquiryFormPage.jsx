import React, { useState } from 'react';
import './EnquiryFormPage.css';

const EnquiryFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    fromDate: '',
    toDate: '',
    people: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry Submitted!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      fromDate: '',
      toDate: '',
      people: 1,
    });
  };

  return (
    <div className="enquiry-form-page">
      <h2 className="form-title">Send an Enquiry</h2>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="destination"
          placeholder="Travel Destination"
          required
          value={formData.destination}
          onChange={handleChange}
        />

        <div className="date-group">
          <label>
            From:
            <input
              type="date"
              name="fromDate"
              required
              value={formData.fromDate}
              onChange={handleChange}
            />
          </label>

          <label>
            To:
            <input
              type="date"
              name="toDate"
              required
              value={formData.toDate}
              onChange={handleChange}
            />
          </label>
        </div>

        <input
          type="number"
          name="people"
          placeholder="Number of People"
          min="1"
          required
          value={formData.people}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">Submit Enquiry</button>
      </form>
    </div>
  );
};

export default EnquiryFormPage;
