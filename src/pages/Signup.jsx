import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup is only a demo. No backend connected.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>Name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <label>User Type</label>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option>User</option>
        <option>Worker</option>
      </select>
      <button className="button" type="submit">Signup</button>
      <p style={{ marginTop: 10 }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}

export default Signup; 