import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchedulePage.css';

function ScheduleFr() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Le nom est requis';
    if (!phone) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Le numéro de téléphone doit comporter 10 chiffres';
    if (!email) newErrors.email = 'L\'email est requis';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Le format de l\'email est invalide';
    if (!date) newErrors.date = 'La date est requise';
    if (!time) newErrors.time = 'L\'heure est requise';

    const selectedDate = new Date(date);
    if (selectedDate.getDay() === 5 || selectedDate.getDay() === 6) {
      newErrors.date = 'Les rendez-vous ne peuvent pas être programmés le week-end';
    }

    const selectedTime = parseInt(time.replace(':', ''), 10);
    if (selectedTime < 900 || selectedTime > 1800) {
      newErrors.time = 'L\'heure du rendez-vous doit être comprise entre 9h et 18h';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/react-app/confirmation-fr', {
        state: { name, phone, email, date, time }
      });
    }
  };

  return (
    <div className="schedule-page">
      <h2>Prendre un Rendez-vous</h2>
      <p>Rencontrez l'un de nos commerciaux pour obtenir plus d'informations sur nos produits.</p>
      <p>Nos heures de bureau sont de 9h à 18h, du lundi au vendredi. Nous sommes fermés le week-end et les jours fériés.</p>
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
          Téléphone :
          <input
            type="tel"
            value={phone}
            placeholder="ex : 0123456789"
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Email :
          <input
            type="email"
            value={email}
            placeholder="ex : exemple@domaine.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Date du rendez-vous :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>
          Heure du rendez-vous :
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </label>
        <button type="submit">
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default ScheduleFr;
