import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchedulePage.css';

function SchedulePage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email format is invalid';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';

    const selectedDate = new Date(date);
    if (selectedDate.getDay() === 5 || selectedDate.getDay() === 6) {
      newErrors.date = 'Appointments cannot be scheduled on weekends';
    }

    const selectedTime = parseInt(time.replace(':', ''), 10);
    if (selectedTime < 900 || selectedTime > 1800) {
      newErrors.time = 'Appointment time must be between 9 AM and 6 PM';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/confirmation', {
        state: { name, phone, email, date, time }
      });
    }
  };

  return (
    <div className="schedule-page">
      <h2>Book an Appointment</h2>
      <p>Meet one of our salespeople to receive more information on our products.</p>
      <p>Our office hours are 9 AM to 6 PM, Monday to Friday. We are closed on weekends and public holidays.</p>
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
          Phone:
          <input
            type="tel"
            value={phone}
            placeholder="e.g., 1234567890"
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="e.g., example@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Appointment Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>
          Appointment Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </label>
        <button type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default SchedulePage;
