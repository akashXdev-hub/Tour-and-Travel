import React from 'react';
import PackageCard from "../../components/packageCard/PackageCard";
import Navbar from "../../components/Navbar/Navbar";
import './LuxuryHolidaysPage.css';

const luxuryPackages = [
  {
    image: '/images/maldives.jpeg',
    title: 'Maldives Luxury Escape',
    location: 'Maldives',
    days: 5,
    nights: 4,
    price: 75000
  },
  {
    image: '/images/swiss.jpeg',
    title: 'Swiss Alps Retreat',
    location: 'Switzerland',
    days: 7,
    nights: 6,
    price: 120000
  },
  {
    image: '/images/dubaigold.jpeg',
    title: 'Dubai Gold Luxury Tour',
    location: 'Dubai',
    days: 4,
    nights: 3,
    price: 65000
  },
  {
    image: '/images/santorni.jpeg',
    title: 'Santorini Private Villa Stay',
    location: 'Greece',
    days: 6,
    nights: 5,
    price: 98000
  },

  {
    image: '/images/bali.jpeg',
    title: 'Bali Island Luxury Spa Retreat',
    location: 'Bali',
    days: 6,
    nights: 5,
    price: 87000
  },
  {
    image: '/images/rajasthan.jpeg',
    title: 'Rajasthan Palace Tour',
    location: 'India',
    days: 5,
    nights: 4,
    price: 68000
  },
  {
    image: '/images/seychellas.jpeg',
    title: 'Seychelles Overwater Villas',
    location: 'Seychelles',
    days: 6,
    nights: 5,
    price: 110000
  },
  {
    image: '/images/tokyo.jpeg',
    title: 'Tokyo Premium City Tour',
    location: 'Japan',
    days: 5,
    nights: 4,
    price: 95000
  },
  {
    image: '/images/newyork.jpeg',
    title: 'New York Luxury Escape',
    location: 'USA',
    days: 4,
    nights: 3,
    price: 99000
  },
  {
    image: '/images/venica.jpeg',
    title: 'Venice Gondola & Luxury Stay',
    location: 'Italy',
    days: 4,
    nights: 3,
    price: 88000
  },
  {
    image: '/images/kenya.jpeg',
    title: 'Kenya Luxury Safari',
    location: 'Kenya',
    days: 6,
    nights: 5,
    price: 115000
  },
  {
    image: '/images/sydney.jpeg',
    title: 'Sydney Premium Experience',
    location: 'Australia',
    days: 5,
    nights: 4,
    price: 97000
  },
  {
    image: '/images/phuket.jpeg',
    title: 'Phuket Beachfront Resort',
    location: 'Thailand',
    days: 4,
    nights: 3,
    price: 74000
  },
  {
    image: '/images/scotland.jpeg',
    title: 'Scotland Castle Stay',
    location: 'Scotland',
    days: 5,
    nights: 4,
    price: 102000
  }
];

const LuxuryHolidaysPage = () => {
  return (
    <>
     <Navbar />
    <div className="luxury-holidays-page">
      <h2 className="page-title">Luxury Holiday Packages</h2>
      <div className="package-grid">
        {luxuryPackages.map((pkg, index) => (
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
    </div>
    </>
  );
};

export default LuxuryHolidaysPage;
