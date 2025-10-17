import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">DesignerCo</Link>
      </div>
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
          {/* Contact button is now the last item in the navigation list */}
          <li>
            <button className="contact-button">Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;