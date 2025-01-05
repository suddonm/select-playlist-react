// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Custom CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="logo">The Loop Crate Collective</h1>
        <p className="slogan">Digging deeper into underground beats. 🎶</p>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-title">Discover the Best Underground House Vibes</h2>
          <p className="hero-description">
            Join our collective of music lovers, crate diggers, and curators. Dive into a world of fresh beats, 
            underground house, and eclectic sounds from across genres.
          </p>
          <Link to="/submit" className="cta-button">Submit Your Track</Link>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600x400" alt="Hero Art" />
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          The Loop Crate Collective is all about curating fresh, underground music that resonates with real 
          music lovers. Our mission is to dig deeper into the crates and bring forward beats that inspire and 
          connect people. Whether you're a producer, DJ, or just a fan of the underground scene, you're part of the 
          collective.
        </p>
      </section>

      <section className="cta">
        <h2>Want to Join the Collective?</h2>
        <p>Submit your tracks to be part of our playlist curation! Get your music heard by our growing community.</p>
        <Link to="/submit" className="cta-button">Submit Your Track</Link>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2025 The Loop Crate Collective</p>
      </footer>
    </div>
  );
};

export default LandingPage;
