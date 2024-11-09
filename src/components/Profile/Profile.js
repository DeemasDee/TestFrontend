import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Ambil data profil pengguna dari API atau state global
    setUser({
      nama: 'John Doe',
      email: 'john@example.com',
    });
  }, []);

  return (
    <div className="profile-container">
      <h1>Profil Pengguna</h1>
      <p>Nama: {user.nama}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
