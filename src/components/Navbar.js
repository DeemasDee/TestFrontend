// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NamaAplikasi</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
