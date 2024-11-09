import React from 'react';

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Selamat Datang di Halaman Utama</h1>
      <div className="section">
        <h2>Post Terbaru</h2>
        {/* Render post terbaru */}
      </div>
      <div className="section">
        <h2>Event Terbaru</h2>
        {/* Render event terbaru */}
      </div>
    </div>
  );
}

export default Homepage;
