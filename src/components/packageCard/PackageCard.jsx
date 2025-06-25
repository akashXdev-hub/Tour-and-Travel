import React from 'react';
import './PackageCard.css';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const PackageCard = ({ image, title, location, days, nights, price }) => {
  return (
    <div className="travel-card">
      <div className="travel-card-img-container">
        <img src={image} alt={title} className="travel-card-img" />
        <div className="travel-card-price">Rs.{price}</div>
      </div>
      <div className="travel-card-body">
        <h3 className="travel-card-title">{title}</h3>
        <p className="travel-card-location">
          <FaMapMarkerAlt className="icon" /> {location}
        </p>
        <p className="travel-card-duration">
          <FaRegClock className="icon" /> {days} Days / {nights} Nights
        </p>
        <a href="#" className="travel-card-button">View Details</a>
      </div>
    </div>
  );
};

export default PackageCard;
