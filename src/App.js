// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage/Homepage.js';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import VolunteerForm from './components/Forms/VolunteerForm';
import ReportIssue from './components/Reports/ReportIssue';
import Events from './components/Events/Events';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/reports" element={<ReportIssue />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
