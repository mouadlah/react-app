import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function FooterFr() {
  return (
    <footer>
      <div className="contact">
        <h3>Contactez-nous</h3>
        <p>Email: info@ots.com</p>
        <p>Téléphone: (123) 456-7890</p>
        <p>123, av. Laurier</p>
      </div>
      <div className="follow-us">
        <h3>Suivez-nous</h3>
        <div className="social-links">
          <a href="https://fr.linkedin.com/" target="_blank" aria-label="LinkedIn" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/?hl=fr" target="_blank" aria-label="Instagram" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/?lang=fr" target="_blank" aria-label="Twitter" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="resources">
        <h3>Ressources</h3>
        <Link to="/react-app/support-fr">Support</Link>
        <Link to="/react-app/blog-fr">Blog</Link>
        <Link to="/react-app/faq-fr">FAQs</Link>
      </div>
    </footer>
  );
}

export default FooterFr;
