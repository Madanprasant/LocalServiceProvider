import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import WorkerProfile from "./pages/WorkerProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="container">
          <Link className="logo" to="/">Local Service Provider</Link>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/user-profile">User Profile</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/worker/:id" element={<WorkerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
