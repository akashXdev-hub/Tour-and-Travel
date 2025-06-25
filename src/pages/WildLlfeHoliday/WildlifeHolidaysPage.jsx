import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PackageCard from "../../components/packageCard/PackageCard";
import './WildlifeHolidaysPage.css';

const wildlifePackages = [
  {
    image: '/images/wildlife1.jpeg',
    title: 'Jim Corbett Wildlife Safari',
    location: 'Uttarakhand, India',
    days: 3,
    nights: 2,
    price: 12000
  },
  {
    image: '/images/wildlife2.jpg',
    title: 'Kaziranga Rhino Tour',
    location: 'Assam, India',
    days: 4,
    nights: 3,
    price: 15000
  },
  {
    image: '/images/wildlife3.jpg',
    title: 'Bandhavgarh Tiger Trail',
    location: 'Madhya Pradesh, India',
    days: 4,
    nights: 3,
    price: 14000
  },
  {
    image: '/images/wildlife4.jpg',
    title: 'Gir National Park Expedition',
    location: 'Gujarat, India',
    days: 3,
    nights: 2,
    price: 13000
  },
  {
    image: '/images/wildlife5.jpg',
    title: 'Ranthambore Jungle Stay',
    location: 'Rajasthan, India',
    days: 4,
    nights: 3,
    price: 14500
  },
  {
    image: '/images/wildlife6.jpg',
    title: 'Sundarbans Mangrove Safari',
    location: 'West Bengal, India',
    days: 3,
    nights: 2,
    price: 11000
  },
  {
    image: '/images/wildlife7.jpg',
    title: 'Periyar Wildlife Adventure',
    location: 'Kerala, India',
    days: 4,
    nights: 3,
    price: 12500
  },
  {
    image: '/images/wildlife8.jpg',
    title: 'Kabini Forest Experience',
    location: 'Karnataka, India',
    days: 3,
    nights: 2,
    price: 11800
  }
];

const WildlifeHolidaysPage = () => {
  return (
    <>
      <Navbar />
      <section style={{ padding: "35px 0", textAlign: "center" }}>
        <h2 className="page-title" style={{ fontSize: "2rem", color: "#1d3b84" }}>
          Wildlife Holiday Packages
        </h2>
        <p style={{ marginTop: "5px", color: "#555" }}>
          Explore the untamed wild with our curated jungle safaris and forest adventures.
        </p>
      </section>

      <div className="package-grid">
        {wildlifePackages.map((pkg, index) => (
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
      <Footer />
    </>
  );
};

export default WildlifeHolidaysPage;
