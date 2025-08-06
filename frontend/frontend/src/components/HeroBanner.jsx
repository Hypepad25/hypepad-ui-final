import React from 'react';
import './HeroBanner.css';                   // make sure this import is here
import HeroBannerLogo from '../assets/hypepad-banner.png';  // your banner asset

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container hero-container">
        {/* Enlarged banner logo */}
        <img
          src={HeroBannerLogo}
          alt="HYPEPAD – Fuel Your Launch. Rule the Hype."
          className="hero-banner-logo"
        />

        {/* Main headline */}
        <h1 className="hero-title">Launch. Graduate. Grow.</h1>

        {/* Fixed subtitle text, wrapped and limited in width */}
        <p className="hero-subtitle">
          Multi-chain token launches with rug-proof security and a built-in growth engine.
        </p>

        {/* Call to action */}
        <button className="btn-primary">Join $HYPE Presale</button>
      </div>
    </section>
  );
};

export default HeroBanner;
