import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  const navigate = useNavigate();

  const handleENClick = () => {
    navigate("/react-app");
  };

  const handleFRClick = () => {
    navigate('/react-app/fr');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/react-app">OTS</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/react-app/products">Products</Link></li>
          <li><Link to="/react-app/about">About Us</Link></li>
          <li><Link to="/react-app/schedule">Contact</Link></li>
        </ul>
      </nav>
      <div className="language-selector">
        <i className="bi bi-globe"></i>
        <button className="lang-btn" onClick={handleENClick}>EN</button>
        <button className="lang-btn" onClick={handleFRClick}>FR</button>
      </div>
    </header>
  );
}

export default Header;
