import React from 'react';
import Header from '../components/Header';
import GridBackground from '../components/GridBackground';
import CursorScene from '../components/CursorScene';
import AnimatedBorderButton from '../components/AnimatedBorderButton'; // Import the new component
import '../components/styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="grid-background">
        <GridBackground />
      </div>

      <Header />
      <div className="content-container">
        <div className="hero-section">
          <h1 className="hero-title">Designing Experiences</h1>
          <p className="hero-description">
            We create intuitive and beautiful user interfaces that solve real-world problems.
            From wireframes to final design, our process is centered around the user.
          </p>
          <div className="hero-buttons">
            {/* Use the new AnimatedBorderButton component */}
            <AnimatedBorderButton>Make your Dream Website</AnimatedBorderButton>
            <button className="hero-button hero-button--secondary">
              About Us
            </button>
          </div>
        </div>
        <div className="canvas-container">
          <CursorScene />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;