import React from 'react';
import './TravelCategories.css';
import { Link } from 'react-router-dom';
import {
  FaShip,
  FaMountain,
  FaCampground,
  FaPlane,
  FaMapMarkedAlt,
  FaHeart,
  FaBriefcase,
  FaUmbrellaBeach,
} from 'react-icons/fa';

const categories = [
  { icon: <FaShip />, title: "Luxury Holidays", desc: "Indulge in premium experiences", link: "/luxury-holidays" },
  { icon: <FaMapMarkedAlt />, title: "Cruise Holidays", desc: "Set sail to exotic destinations", link: "/cruise-holidays" },
  { icon: <FaMountain />, title: "Wildlife Holidays", desc: "Encounter nature's wonders", link: "/wildlife-holidays" },
  { icon: <FaCampground />, title: "Adventure Trips", desc: "Thrill-packed outdoor journeys", link: "/weekend-getaways" },
  { icon: <FaPlane />, title: "International Tours", desc: "Explore global destinations", link: "/international-holidays" },
  { icon: <FaUmbrellaBeach />, title: "Holiday", desc: "Relax and recharge anytime", link: "/india-holidays" },
  { icon: <FaHeart />, title: "Honeymoon", desc: "Romantic gateways for couples", link: "/honeymoon-packages" },
  { icon: <FaBriefcase />, title: "Corporate", desc: "Professional travel arrangements", link: "/corporate-travel" },
];

const TravelCategories = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-title">Travel Categories</h2>
      <p className="categories-subtitle">
        Choose from our diverse range of travel experiences tailored to your preferences
      </p>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <Link to={cat.link} key={index} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TravelCategories;
