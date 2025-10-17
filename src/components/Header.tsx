import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">DesignerCo</Link>
      </div>
      <div className="nav-container">
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/process">Our Process</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="header-button">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;