import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PackageCard from "../../components/packageCard/PackageCard";
import '../LuxuryHoliday/LuxuryHolidaysPage.css';
import './WeekendGetawaysPage.css';

const weekendPackages = [
  {
    image: '/images/weekend1.jpg',
    title: 'Mussoorie Hills Escape',
    location: 'Uttarakhand',
    days: 3,
    nights: 2,
    price: 8500
  },
  {
    image: '/images/weekend2.jpg',
    title: 'Jaipur Heritage Getaway',
    location: 'Rajasthan',
    days: 3,
    nights: 2,
    price: 9500
  },
  {
    image: '/images/weekend3.jpg',
    title: 'Lonavala Scenic Drive',
    location: 'Maharashtra',
    days: 2,
    nights: 1,
    price: 7500
  },
  {
    image: '/images/weekend4.jpg',
    title: 'Coorg Coffee Trails',
    location: 'Karnataka',
    days: 3,
    nights: 2,
    price: 9200
  },
  {
    image: '/images/weekend5.jpg',
    title: 'Pondicherry French Vibes',
    location: 'Tamil Nadu',
    days: 3,
    nights: 2,
    price: 8800
  },
  {
    image: '/images/weekend6.jpg',
    title: 'Rishikesh Adventure Break',
    location: 'Uttarakhand',
    days: 2,
    nights: 1,
    price: 7900
  },
  {
    image: '/images/weekend7.jpg',
    title: 'Mount Abu Quick Trip',
    location: 'Rajasthan',
    days: 2,
    nights: 2,
    price: 8600
  },
  {
    image: '/images/weekend8.jpg',
    title: 'Mahabaleshwar Nature Tour',
    location: 'Maharashtra',
    days: 2,
    nights: 1,
    price: 8100
  }
];

const WeekendGetawaysPage = () => {
  
  const [searchLocation, setSearchLocation] = useState('');

  const filteredPackages = weekendPackages.filter(pkg =>
    pkg.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const shortTrips = filteredPackages.filter(pkg => pkg.days <= 2);
  const customTours = filteredPackages.filter(pkg => pkg.days > 2);

  return (
    <>
      <Navbar />

      <section style={{ padding: "35px 0", textAlign: "center" }}>
        <h2 className="page-title" style={{ fontSize: "2rem", color: "#1d3b84" }}>
          Weekend Getaways
        </h2>
        <p style={{ marginTop: "5px", color: "#555" }}>
          Short trips, big memories! Explore weekend escapes near you.
        </p>
      </section>

      <div className="small-search-bar">
        <input
          type="text"
          placeholder="Search by location (e.g., Goa, Shimla...)"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      <section style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "1.8rem", color: "#1d3b84" }}>
          Short Trips / Local Escapes
        </h3>
        <div className="package-grid">
          {shortTrips.map((pkg, index) => (
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

      <section style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "1.8rem", color: "#1d3b84" }}>
          Custom Weekend Tours
        </h3>
        <div className="package-grid">
          {customTours.map((pkg, index) => (
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

      <Footer />
    </>
  );
};

export default WeekendGetawaysPage;
