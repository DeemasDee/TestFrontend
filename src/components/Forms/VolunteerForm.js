// src/components/Forms/VolunteerForm.js
import React, { useState } from 'react';
import '../../assets/styles/Forms.css';

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk memproses data form
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Volunteer Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
