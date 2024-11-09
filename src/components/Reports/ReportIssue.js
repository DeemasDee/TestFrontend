// src/components/Reports/ReportIssue.js
import React, { useState } from 'react';
import '../../assets/styles/Reports.css';


function ReportIssue() {
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan laporan
    console.log(issue);
  };

  return (
    <div className="report-container">
      <h1>Report an Issue</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe the issue here..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportIssue;
