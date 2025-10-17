import React from 'react';
import Header from '../components/Header';
import ThreeScene from '../components/ThreeScene';
import '../components/styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="content-container">
        <div className="hero-section">
          <h1 className="hero-title">Designing Experiences</h1>
          <p className="hero-description">
            We create intuitive and beautiful user interfaces that solve real-world problems.
            From wireframes to final design, our process is centered around the user.
          </p>
        </div>
        <div className="canvas-container">
          <ThreeScene />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;