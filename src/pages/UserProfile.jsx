import React from "react";

function UserProfile() {
  return (
    <div className="main-content">
      <h2>User Profile</h2>
      <div className="card" style={{ maxWidth: 400 }}>
        <h3>Madan</h3>
        <p>Email: madan@gmail.com</p>
        <p>Location: Erode,Tamil Nadu</p>
      </div>
      <div className="card" style={{ maxWidth: 400 }}>
        <h4>Recent Bookings</h4>
        <ul style={{ paddingLeft: 18 }}>
          <li>Electrician - 12th June 2024</li>
          <li>Plumber - 5th June 2024</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile; 