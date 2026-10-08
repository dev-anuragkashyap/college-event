import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Style/Navbar.css';
import logoImg from '../assets/logo.jpeg'; // Ensure you have a logo image in the specified path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate('/')}>
          <img src={logoImg} alt="CampusEvents Logo" className="logo-img" />
          <span className="logo-text">Campus<span className="logo-highlight">Events</span></span>
        </div>

        {/* Nav Links using NavLink for active routing */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              onClick={() => setIsOpen(false)}
            >
              {item.name} {item.name === 'Events' && <span className="dropdown-arrow">▾</span>}
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="nav-actions">

          
          <button className="explore-events-btn" onClick={() => navigate('/events')}>
            Explore Events <span>→</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
}