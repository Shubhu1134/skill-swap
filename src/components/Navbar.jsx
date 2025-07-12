import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Skill Swap</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;
