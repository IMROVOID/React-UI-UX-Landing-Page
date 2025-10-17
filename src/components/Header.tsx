import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line line1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line line2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line line3 ${isOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>UI/UX Design</Link>
          </li>
          {/* Add more links for other landing pages here */}
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="header-button">Contact</button>
      </div>
    </header>
  );
};

export default Header;