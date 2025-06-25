import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PackageCard from "../../components/packageCard/PackageCard";
import '../LuxuryHoliday/LuxuryHolidaysPage.css'; 
import './CruiseHolidaysPage.css'; 

const cruisePackages = [
  {
    image: '/images/cruise1.jpeg',
    title: 'Mediterranean Cruise Adventure',
    location: 'Europe',
    days: 7,
    nights: 6,
    price: 85000
  },
  {
    image: '/images/cruise2.jpg',
    title: 'Alaska Glacier Voyage',
    location: 'USA',
    days: 8,
    nights: 7,
    price: 99000
  },
  {
    image: '/images/cruise3.jpg',
    title: 'Caribbean Island Cruise',
    location: 'Caribbean',
    days: 6,
    nights: 5,
    price: 78000
  },
  {
    image: '/images/cruise4.jpg',
    title: 'Singapore to Thailand Cruise',
    location: 'Asia',
    days: 5,
    nights: 4,
    price: 62000
  },
  {
    image: '/images/cruise5.jpg',
    title: 'Dubai Marina Luxury Cruise',
    location: 'Dubai',
    days: 4,
    nights: 3,
    price: 57000
  },
  {
    image: '/images/cruise6.jpg',
    title: 'Norwegian Fjord Explorer',
    location: 'Norway',
    days: 7,
    nights: 6,
    price: 89000
  },
  {
    image: '/images/cruise7.jpg',
    title: 'Greek Islands Romantic Cruise',
    location: 'Greece',
    days: 6,
    nights: 5,
    price: 84000
  },
  {
    image: '/images/cruise8.jpg',
    title: 'South Pacific Dream Cruise',
    location: 'Fiji & Tahiti',
    days: 10,
    nights: 9,
    price: 112000
  }
];

const CruiseHolidaysPage = () => {
  return (
    <>
      <Navbar />
      <section style={{ padding: "35px 0", textAlign: "center" }}>
        <h2 className="page-title" style={{ fontSize: "2rem", color: "#1d3b84" }}>
          Cruise Holiday Packages
        </h2>
        <p style={{ marginTop: "5px", color: "#555" }}>
          Set sail on luxury cruise vacations with breathtaking views and experiences!
        </p>
      </section>

      <div className="package-grid">
        {cruisePackages.map((pkg, index) => (
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

      {/* Cruise Enquiry Button */}
     <section className="cruise-cta">
        <div className="cta-content">
          <h2>Ready to Set Sail?</h2>
          <p>Let us help you plan your dream cruise holiday today!</p>
          <Link to="/enquiry">
            <button className="enquiry-button">Enquire Now</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CruiseHolidaysPage;
