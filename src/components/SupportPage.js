import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupportPage.css';

function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email format is invalid';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/ticket-confirmation', {
        state: { name, email, phone, message }
      });
    }
  };

  return (
    <div className="support-page">
      <h2>Open a Ticket</h2>
      <p>Get in touch with us for any inquiries or support by opening a ticket now.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            placeholder="e.g., example@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            placeholder="e.g., 1234567890"
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Your Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SupportPage;
