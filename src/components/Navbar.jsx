import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">FlexiFib</div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><a href="#why">Why Switch?</a></li>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="login-btn">Log in</button>
        <button className="cta-btn">Get Started</button>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
