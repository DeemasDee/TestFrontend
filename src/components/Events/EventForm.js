// src/components/Events/EventForm.js
import React, { useState } from 'react';

function EventForm({ addEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventDescription) return;

    addEvent({
      name: eventName,
      date: eventDate,
      description: eventDescription,
    });

    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h3>Add New Event</h3>
      <div className="form-group">
        <label>Event Name</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Event Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button">Add Event</button>
    </form>
  );
}

export default EventForm;
