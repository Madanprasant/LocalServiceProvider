import React from "react";
import { Link } from "react-router-dom";

const workers = [
  { id: 1, name: "Electrician", desc: "Expert in electrical repairs & installations.", img: "https://img.icons8.com/color/96/000000/electrical.png" },
  { id: 2, name: "Plumber", desc: "Professional plumbing services for your home.", img: "https://img.icons8.com/color/96/000000/plumber.png" },
  { id: 3, name: "Mechanic", desc: "Vehicle repair and maintenance specialist.", img: "https://img.icons8.com/color/96/000000/car-service.png" },
  { id: 4, name: "Tutor", desc: "Qualified tutors for all subjects and grades.", img: "https://img.icons8.com/color/96/000000/classroom.png" },
];

function Home() {
  return (
    <div className="main-content">
      <h2>Find Trusted Local Service Providers in India</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {workers.map((worker) => (
          <div className="card" key={worker.id} style={{ width: 250, textAlign: "center" }}>
            <img src={worker.img} alt={worker.name} style={{ width: 80, height: 80, marginBottom: 10 }} />
            <h3>{worker.name}</h3>
            <p>{worker.desc}</p>
            <Link className="button" to={`/worker/${worker.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 