import React, { useState } from 'react';
import './InternationalHolidaysPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const regions = ['Europe', 'Asia', 'USA', 'Australia', 'Africa', 'Middle East'];

const internationalPackages = [
  {
    image: '/images/inter1.jpg',
    title: 'Romantic Paris Getaway',
    location: 'France - Europe',
    region: 'Europe',
    itinerary: '/itineraries/paris.pdf',
    price: 120000,
  },
  {
    image: '/images/inter2.jpg',
    title: 'Thailand Tropical Adventure',
    location: 'Thailand - Asia',
    region: 'Asia',
    itinerary: '/itineraries/thailand.pdf',
    price: 65000,
  },
  {
    image: '/images/inter3.jpg',
    title: 'USA Grand Tour',
    location: 'New York, LA, Vegas - USA',
    region: 'USA',
    itinerary: '/itineraries/usa.pdf',
    price: 200000,
  },
  {
    image: '/images/inter4.jpg',
    title: 'Australia East Coast Highlights',
    location: 'Sydney, Melbourne - Australia',
    region: 'Australia',
    itinerary: '/itineraries/australia.pdf',
    price: 150000,
  },
  {
    image: '/images/inter5.jpg',
    title: 'Mystical Egypt Expedition',
    location: 'Cairo, Luxor - Africa',
    region: 'Africa',
    itinerary: '/itineraries/egypt.pdf',
    price: 180000,
  },
  {
    image: '/images/inter6.jpg',
    title: 'Dubai City Break',
    location: 'Dubai - Middle East',
    region: 'Middle East',
    itinerary: '/itineraries/dubai.pdf',
    price: 80000,
  }
];

const InternationalHolidaysPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [search, setSearch] = useState('');

  const filteredPackages = internationalPackages.filter(pkg =>
    (selectedRegion ? pkg.region === selectedRegion : true) &&
    pkg.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="international-holidays-page">
        <h2 className="page-title">Explore International Holiday Packages</h2>
        <p className="page-subtitle">Discover breathtaking tours around the world – Europe, Asia, USA & more.</p>

        {/*  Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by country or city (e.g., Paris, Dubai)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/*  Region Filters */}
        <section className="region-section">
          <h3>Browse by Region</h3>
          <div className="region-filter">
            {regions.map((region, index) => (
              <button
                key={index}
                className={`region-button ${selectedRegion === region ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </button>
            ))}
            {selectedRegion && (
              <button className="region-button clear" onClick={() => setSelectedRegion('')}>
                Clear Filter ✖
              </button>
            )}
          </div>
        </section>

        {/*  Country-wise Tour Listings */}
        <section className="packages-section">
          <h3>
            {selectedRegion ? `${selectedRegion} Tours` : 'Popular International Tours'}
          </h3>
          <div className="package-grid">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <div className="package-card" key={index}>
                  <div className="price-tag">₹ {pkg.price.toLocaleString()}</div>
                  <img src={pkg.image} alt={pkg.title} />
                  <div className="package-card-details">
                    <div className="package-card-title">{pkg.title}</div>
                    <div className="package-card-location">{pkg.location}</div>

                    <div className="card-buttons">
                      <a
                        href={pkg.itinerary}
                        className="itinerary-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Itinerary
                      </a>
                      <a href="/details" className="details-button">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No tours found for this search.</p>
            )}
          </div>
        </section>

        {/*  Enquiry button*/}
        <section className="enquiry-cta">
          <h3>Need Help Planning Your International Trip?</h3>
          <p>Contact our travel experts to customize your perfect itinerary.</p>
          <a href="/enquiry" className="enquiry-button">Send Enquiry</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InternationalHolidaysPage;
