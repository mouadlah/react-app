import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupportPage.css';

function SupportFr() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Le nom est requis';
    if (!email) newErrors.email = 'L\'email est requis';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Le format de l\'email est invalide';
    if (!phone) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Le numéro de téléphone doit comporter 10 chiffres';
    if (!message) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/react-app/ticket-confirmation-fr', {
        state: { name, email, phone, message }
      });
    }
  };

  return (
    <div className="support-page">
      <h2>Ouvrir un Ticket</h2>
      <p>Contactez-nous pour toute demande ou assistance en ouvrant un ticket dès maintenant.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Adresse Email :
          <input
            type="email"
            value={email}
            placeholder="ex : exemple@domaine.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Numéro de Téléphone :
          <input
            type="tel"
            value={phone}
            placeholder="ex : 0123456789"
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Votre Message :
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default SupportFr;
