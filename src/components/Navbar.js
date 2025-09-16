import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">🎵 MusicZone</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/playlist">Playlist</Link></li>
        <li><Link to="/library">Library</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/auth">Login</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
