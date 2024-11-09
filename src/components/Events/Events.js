// src/components/Events/Events.js
import React, { useState } from 'react';
import '../../assets/styles/Events.css';

function Events() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Event 1', description: 'Description of event 1', completed: false },
    { id: 2, title: 'Event 2', description: 'Description of event 2', completed: false },
    // Tambahkan data event lainnya
  ]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '' });

  // Fungsi untuk menambah event baru
  const addEvent = () => {
    if (newEvent.title && newEvent.description) {
      setEvents([...events, { ...newEvent, id: events.length + 1, completed: false }]);
      setNewEvent({ title: '', description: '' });
    }
  };

  // Fungsi untuk menandai event sebagai selesai
  const markAsCompleted = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, completed: true } : event
    ));
  };

  return (
    <div className="event-page-container">
      <h1>Manage Events</h1>
      
      {/* Input Event */}
      <div className="add-event">
        <h2>Add New Event</h2>
        <input 
          type="text" 
          placeholder="Event Title" 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <textarea 
          placeholder="Event Description" 
          value={newEvent.description} 
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
      
      {/* Upcoming Events */}
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.filter(event => !event.completed).map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button onClick={() => markAsCompleted(event.id)} className="complete-button">
              Mark as Completed
            </button>
          </div>
        ))}
      </div>
      
      {/* Completed Events */}
      <h2>Completed Events</h2>
      <div className="event-list">
        {events.filter(event => event.completed).map(event => (
          <div key={event.id} className="event-card completed">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
