import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        
        <div className="navbar-container">
            <div className="logo">
            <h2>OM Tour</h2>
        </div>
            <ul className="nav-links">
                <li><a href = "/">Home</a></li>

                <li className="dropdown">
                <a href="#" className="dropbtn">Holiday Packages</a>
                  <div className="dropdown-content">
                 <Link to="/luxury-holidays">Luxury Holidays</Link>
                  <Link to="/wildlife-holidays">Wildlife Holidays</Link>
                  <Link to="/cruise-holidays">Cruise Holidays</Link>
                  <Link to="/india-holidays">India Holidays</Link>
                  <Link to="/international-holidays">International Holidays</Link>
                   <Link to="/weekend-getaways">Weekend Getaways</Link>     
                  <Link to="/honeymoon-packages">Honeymoon Packages</Link>             
                  <Link to="/corporate-travel">Corporate Travel</Link>
                  </div>
                  </li>
                    
                <li><a href = "/gallery">Gallery</a></li>
                <li><a href= "/blog">Blog</a></li>
                <li><a href = "/about">About us</a></li>
                <li><a href = "/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
