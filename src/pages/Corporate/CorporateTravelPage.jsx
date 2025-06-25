import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PackageCard from "../../components/packageCard/PackageCard";
import '../LuxuryHoliday/LuxuryHolidaysPage.css'; 
import './CorporateTravelPage.css'; 

const corporatePackages = [
  {
    image: '/images/corp1.jpg',
    title: 'Dubai Business Tour with Expo',
    location: 'Dubai',
    days: 4,
    nights: 3,
    price: 68000
  },
  {
    image: '/images/corp2.jpg',
    title: 'Singapore MICE Excellence',
    location: 'Singapore',
    days: 5,
    nights: 4,
    price: 79000
  },
  {
    image: '/images/corp3.jpg',
    title: 'Goa Beachside Corporate Retreat',
    location: 'Goa',
    days: 3,
    nights: 2,
    price: 42000
  },
  {
    image: '/images/corp4.jpg',
    title: 'Jaipur Heritage Conference Tour',
    location: 'Rajasthan',
    days: 3,
    nights: 2,
    price: 36000
  },
  {
    image: '/images/corp5.jpg',
    title: 'Thailand Corporate Team Bonding',
    location: 'Bangkok & Pattaya',
    days: 4,
    nights: 3,
    price: 54000
  },
  {
    image: '/images/corp6.jpg',
    title: 'Kerala Wellness & Business Retreat',
    location: 'Cochin & Munnar',
    days: 4,
    nights: 3,
    price: 48000
  },
  {
    image: '/images/corp7.jpg',
    title: 'Delhi NCR Conference Weekend',
    location: 'Gurgaon',
    days: 2,
    nights: 1,
    price: 25000
  },
  {
    image: '/images/corp8.jpg',
    title: 'Bangalore Tech & Culture Tour',
    location: 'Bangalore & Mysore',
    days: 3,
    nights: 2,
    price: 39000
  }
];

const CorporateTravelPage = () => {
  const retreatPackages = corporatePackages.filter(pkg =>
    pkg.title.toLowerCase().includes('retreat') ||
    pkg.title.toLowerCase().includes('business') ||
    pkg.title.toLowerCase().includes('team')
  );

  const conferencePackages = corporatePackages.filter(pkg =>
    pkg.title.toLowerCase().includes('conference') ||
    pkg.title.toLowerCase().includes('expo') ||
    pkg.title.toLowerCase().includes('mice')
  );

  return (
    <>
      <Navbar />

     
      <section style={{ padding: "35px 0", textAlign: "center" }}>
        <h2 className="page-title" style={{ fontSize: "2rem", color: "#1d3b84" }}>
          MICE / Corporate Travel Packages
        </h2>
        <p style={{ marginTop: "5px", color: "#555" }}>
          Business meets leisure. Organize successful events and retreats.
        </p>
      </section>

      {/*Corporate Travel Services */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "1.8rem", color: "#1d3b84", textAlign: "center" }}>
          Corporate Travel Services
        </h3>
        <div className="package-grid">
          {retreatPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              image={pkg.image}
              title={pkg.title}
              location={pkg.location}
              days={pkg.days}
              nights={pkg.nights}
              price={pkg.price}
            />
          ))}
        </div>
      </section>

      {/*  Conferences, Incentives, Meetings */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "1.8rem", color: "#1d3b84", textAlign: "center" }}>
          Conferences, Incentives & Meetings
        </h3>
        <div className="package-grid">
          {conferencePackages.map((pkg, index) => (
            <PackageCard
              key={index}
              image={pkg.image}
              title={pkg.title}
              location={pkg.location}
              days={pkg.days}
              nights={pkg.nights}
              price={pkg.price}
            />
          ))}
        </div>
      </section>

      {/* Contact for MICE */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(to right, #fdfbfb, #ebedee)",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd"
        }}
      >
        <h3 style={{ fontSize: "1.8rem", color: "#1d3b84", marginBottom: "10px" }}>
          Contact for MICE Solutions
        </h3>
        <p style={{ marginTop: "10px", marginBottom: "25px", color: "#666", fontSize: "1rem" }}>
          Tailored support for your corporate events, incentive trips, or conferences.
        </p>
        <Link to="/contact" className="enquiry-button">
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default CorporateTravelPage;
