import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderFr() {
  const navigate = useNavigate();

  const handleENClick = () => {
    navigate('/');
  };

  const handleFRClick = () => {
    navigate('/fr');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/react-app/fr">OTS</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/react-app/products-fr">Produits</Link></li>
          <li><Link to="/react-app/about-fr">À propos</Link></li>
          <li><Link to="/react-app/schedule-fr">Contact</Link></li>
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

export default HeaderFr;
