// src/components/Events/EventList.js
import React from 'react';

function EventList({ events, onComplete }) {
  return (
    <div className="event-list">
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-card">
            <h4>{event.name}</h4>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            {onComplete && (
              <button onClick={() => onComplete(index)} className="complete-button">
                Mark as Completed
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default EventList;
