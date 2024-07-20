import React from 'react';
import { useLocation } from 'react-router-dom';
import './TicketConfirmationPage.css';

function TicketConfirmationFr() {
  const location = useLocation();
  const { name, email, phone, message } = location.state || {};

  return (
    <div className="confirmation-page">
      <h2>Ticket Soumis</h2>
      <p>Votre ticket de support a été soumis avec succès. Voici les détails :</p>
      <ul>
        <li><strong>Nom :</strong> {name}</li>
        <li><strong>Email :</strong> {email}</li>
        <li><strong>Téléphone :</strong> {phone}</li>
        <li><strong>Message :</strong> {message}</li>
      </ul>
    </div>
  );
}

export default TicketConfirmationFr;
