import React from "react";
import { useParams } from "react-router-dom";

const workerData = {
  1: {
    name: "Electrician",
    desc: "Expert in electrical repairs & installations.",
    img: "https://img.icons8.com/color/96/000000/electrical.png",
    experience: "5 years",
    location: "Delhi, India",
    rating: 4.8,
  },
  2: {
    name: "Plumber",
    desc: "Professional plumbing services for your home.",
    img: "https://img.icons8.com/color/96/000000/plumber.png",
    experience: "7 years",
    location: "Bangalore, India",
    rating: 4.6,
  },
  3: {
    name: "Mechanic",
    desc: "Vehicle repair and maintenance specialist.",
    img: "https://img.icons8.com/color/96/000000/car-service.png",
    experience: "4 years",
    location: "Chennai, India",
    rating: 4.7,
  },
  4: {
    name: "Tutor",
    desc: "Qualified tutors for all subjects and grades.",
    img: "https://img.icons8.com/color/96/000000/classroom.png",
    experience: "6 years",
    location: "Pune, India",
    rating: 4.9,
  },
};

function WorkerProfile() {
  const { id } = useParams();
  const worker = workerData[id] || {};

  return (
    <div className="main-content">
      <div className="card" style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
        <img src={worker.img} alt={worker.name} style={{ width: 80, height: 80, marginBottom: 10 }} />
        <h2>{worker.name}</h2>
        <p>{worker.desc}</p>
        <p><b>Experience:</b> {worker.experience}</p>
        <p><b>Location:</b> {worker.location}</p>
        <p><b>Rating:</b> {worker.rating} ⭐</p>
        <button className="button" style={{ marginTop: 10 }}>Book Now</button>
      </div>
    </div>
  );
}

export default WorkerProfile; 