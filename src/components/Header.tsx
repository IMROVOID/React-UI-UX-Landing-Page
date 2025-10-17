import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">DesignerCo</Link>
      </div>

      {isMobile ? (
        <div className="hamburger-container">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
      ) : (
        <nav className="header-nav">
          <ul>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/process">Our Process</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><button className="contact-button">Contact</button></li>
          </ul>
        </nav>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/case-studies" onClick={closeMenu}>Case Studies</Link></li>
            <li><Link to="/process" onClick={closeMenu}>Our Process</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><button className="contact-button" onClick={closeMenu}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;