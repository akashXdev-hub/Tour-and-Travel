import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PackageCard from "../../components/packageCard/PackageCard";
import '../LuxuryHoliday/LuxuryHolidaysPage.css'; 
import './HoneymoonPackagesPage.css'; 

const honeymoonPackages = [
  {
    image: '/images/honeymoon1.jpg',
    title: 'Maldives Romantic Retreat',
    location: 'Maldives',
    days: 5,
    nights: 4,
    price: 45000
  },
  {
    image: '/images/honeymoon2.jpg',
    title: 'Shimla & Manali Honeymoon',
    location: 'Himachal Pradesh',
    days: 6,
    nights: 5,
    price: 42000
  },
  {
    image: '/images/honeymoon3.jpg',
    title: 'Bali Island Romance',
    location: 'Indonesia',
    days: 5,
    nights: 4,
    price: 72000
  },
  {
    image: '/images/honeymoon4.jpg',
    title: 'Kerala Backwater Bliss',
    location: 'Alleppey & Munnar',
    days: 6,
    nights: 5,
    price: 39000
  },
  {
    image: '/images/honeymoon5.jpg',
    title: 'Paris City of Love',
    location: 'France',
    days: 5,
    nights: 4,
    price: 112000
  },
  {
    image: '/images/honeymoon6.jpg',
    title: 'Goa Beach Romance',
    location: 'Goa',
    days: 4,
    nights: 3,
    price: 28000
  },
  {
    image: '/images/honeymoon7.jpg',
    title: 'Swiss Alps Honeymoon',
    location: 'Switzerland',
    days: 6,
    nights: 5,
    price: 35000
  },
  {
    image: '/images/honeymoon8.jpg',
    title: 'Seychelles Island Magic',
    location: 'Seychelles',
    days: 5,
    nights: 4,
    price: 99000
  }
];

const HoneymoonPackagesPage = () => {
  const romanticDestinations = honeymoonPackages.filter(pkg =>
    ['Goa', 'Shimla', 'Manali', 'Kerala', 'Maldives', 'Alleppey & Munnar', 'Himachal Pradesh'].some(loc =>
      pkg.location.toLowerCase().includes(loc.toLowerCase())
    )
  );

  const customDeals = honeymoonPackages.filter(pkg =>
    pkg.price > 50000 || [ 'Paris', 'Switzerland', 'Seychelles'].some(loc =>
      pkg.location.toLowerCase().includes(loc.toLowerCase())
    )
  );

  return (
    <>
      <Navbar />

      <section style={{ padding: "35px 0", textAlign: "center" }}>
        <h2 className="page-title" style={{ fontSize: "2rem", color: "#1d3b84" }}>
          Honeymoon Packages
        </h2>
        <p style={{ marginTop: "5px", color: "#555" }}>
          Celebrate love with unforgettable romantic getaways.
        </p>
      </section>

      {/* Romantic Destinations */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "1.8rem", color: "#1d3b84" }}>
          Romantic Destinations
        </h3>
        <div className="package-grid">
          {romanticDestinations.map((pkg, index) => (
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

      {/* Customized Honeymoon Deals */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "1.8rem", color: "#1d3b84" }}>
          Customized Honeymoon Deals
        </h3>
        <div className="package-grid">
          {customDeals.map((pkg, index) => (
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

      {/* Enquiry & Booking Section */}
      <section
  style={{
    padding: "60px 20px",
    background: "linear-gradient(to right,rgb(91, 61, 228), #ebedee)",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd"
  }}
>
  <h3 style={{ fontSize: "1.8rem", color: "#1d3b84", marginBottom: "10px" }}>
    Enquiry & Booking
  </h3>
  <p style={{ marginTop: "10px", marginBottom: "25px", color: "#666", fontSize: "1rem" }}>
    Want to customize your honeymoon or ask a question? We're here to help.
  </p>
  <Link to="/enquiry" className="enquiry-button">
    Send Enquiry
  </Link>
</section>


      <Footer />
    </>
  );
};

export default HoneymoonPackagesPage;
