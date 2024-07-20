import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationFr() {
  const location = useLocation();
  const { name, phone, email, date, time } = location.state || {};

  return (
    <div className="confirmation-page">
      <h2>Rendez-vous Confirmé</h2>
      <p>Votre rendez-vous est confirmé. Voici les détails :</p>
      <ul>
        <li><strong>Nom :</strong> {name}</li>
        <li><strong>Téléphone :</strong> {phone}</li>
        <li><strong>Email :</strong> {email}</li>
        <li><strong>Date :</strong> {date}</li>
        <li><strong>Heure :</strong> {time}</li>
      </ul>
    </div>
  );
}

export default ConfirmationFr;
