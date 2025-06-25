import React, { useState } from 'react';
import './IndiaHolidaysPage.css';
import PackageCard from '../../components/packageCard/PackageCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const allIndiaPackages = [
  {
    image: '/images/india1.jpg',
    title: 'Backwaters of Kerala',
    location: 'Kerala',
    state: 'Kerala',
    days: 6,
    nights: 5,
    price: 18500,
  },
  {
    image: '/images/india2.jpg',
    title: 'Royal Rajasthan Tour',
    location: 'Jaipur, Udaipur, Jodhpur',
    state: 'Rajasthan',
    days: 7,
    nights: 6,
    price: 24000,
  },
  {
    image: '/images/india3.jpg',
    title: 'Himachal Hill Escape',
    location: 'Manali, Shimla',
    state: 'Himachal Pradesh',
    days: 5,
    nights: 4,
    price: 15000,
  },
  {
    image: '/images/india4.jpg',
    title: 'Beach Vibes in Goa',
    location: 'Goa',
    state: 'Goa',
    days: 4,
    nights: 3,
    price: 12500,
  },
  {
    image: '/images/india5.jpg',
    title: 'Heavenly Kashmir',
    location: 'Srinagar, Gulmarg',
    state: 'Jammu & Kashmir',
    days: 6,
    nights: 5,
    price: 22000,
  },
  {
    image: '/images/india6.jpg',
    title: 'Spiritual Uttarakhand',
    location: 'Rishikesh, Haridwar',
    state: 'Uttarakhand',
    days: 4,
    nights: 3,
    price: 13000,
  },
  {
    image: '/images/india7.jpg',
    title: 'Temples of Tamil Nadu',
    location: 'Madurai, Rameswaram',
    state: 'Tamil Nadu',
    days: 5,
    nights: 4,
    price: 14500,
  },
  {
    image: '/images/india8.jpg',
    title: 'Heritage of Maharashtra',
    location: 'Ajanta, Ellora, Mumbai',
    state: 'Maharashtra',
    days: 6,
    nights: 5,
    price: 16000,
  }
];

const statesList = [
  'Rajasthan', 'Goa', 'Kerala', 'Himachal Pradesh', 'Uttarakhand',
  'Tamil Nadu', 'Maharashtra', 'Gujarat', 'Jammu & Kashmir'
];

const IndiaHolidaysPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  // Apply filters based on state and search location
  const filteredPackages = allIndiaPackages.filter(pkg => {
    const matchState = selectedState ? pkg.state === selectedState : true;
    const matchLocation = pkg.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchState && matchLocation;
  });

  return (
    <>
      <Navbar />
      <div className="india-holidays-page">
        <h2 className="page-title">Explore Incredible India</h2>
         {/*   Search Bar */}
<div className="small-search-bar">
  <input
    type="text"
    placeholder="Search by location (e.g., Goa, Shimla...)"
    value={searchLocation}
    onChange={(e) => setSearchLocation(e.target.value)}
  />
</div>
        {/*  quick Filters by states */}
        <section className="states-section">
          <h3>Popular States to Visit</h3>
          <ul className="states-list">
            {statesList.map((state, index) => (
              <li
                key={index}
                className={`state-item ${selectedState === state ? 'active' : ''}`}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </li>
            ))}
            {selectedState && (
              <li className="state-item clear-filter" onClick={() => setSelectedState('')}>
                Clear Filter ✖
              </li>
            )}
          </ul>
        </section>

    
        {/*  Filtered Packages */}
        <section className="packages-section">
          <h3>{selectedState ? `${selectedState} Tours` : 'Popular Tours in India'}</h3>
          <div className="package-grid">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  image={pkg.image}
                  title={pkg.title}
                  location={pkg.location}
                  days={pkg.days}
                  nights={pkg.nights}
                  price={pkg.price}
                />
              ))
            ) : (
              <p>No tours found for this location.</p>
            )}
          </div>
        </section>

        {/* Enquiry button*/}
        <section className="enquiry-cta">
          <h3>Need Help Planning Your Trip?</h3>
          <p>Let us help you plan your perfect Indian holiday experience.</p>
          <a href="/enquiry" className="enquiry-button">Send Enquiry</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IndiaHolidaysPage;
