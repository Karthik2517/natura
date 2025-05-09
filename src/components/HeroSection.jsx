import React from 'react';
import '../styles/HeroSection.css';
import heroImg from '../assets/hero-bg.png'; // Optional background image

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-content">
        <h1>Brush Better. Live Cleaner.</h1>
        <p>Eco-friendly hemp brushes crafted for a cleaner planet and a brighter smile.</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
