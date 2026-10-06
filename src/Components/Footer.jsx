import React from 'react';
import './Footer.css';
// Jab aap `npm install react-icons` kar lein, toh in imports ko uncomment kar sakte hain:
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Column: Logo & Tagline */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">🔥</span>
            <span className="logo-text">Study Hall college</span>
          </div>
          <p className="footer-tagline">Together We Celebrate</p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Follow Us & Social Icons & Copyright */}
        <div className="footer-col social-col">
          <h4>Follow Us</h4>
          <div className="social-icons-row">
            {/* Yahan aap apne react-icons use karenge */}
            <a href="#instagram" aria-label="Instagram">
              {/* <FaInstagram /> */}
              <span>📷</span>
            </a>
            <a href="#youtube" aria-label="YouTube">
              {/* <FaYoutube /> */}
              <span>▶</span>
            </a>
            <a href="#facebook" aria-label="Facebook">
              {/* <FaFacebookF /> */}
              <span>f</span>
            </a>
            <a href="#twitter" aria-label="Twitter">
              {/* <FaTwitter /> */}
              <span>𝕏</span>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              {/* <FaLinkedinIn /> */}
              <span>in</span>
            </a>
          </div>
          
          <div className="footer-copyright-right">
            <p>© 2026 Study Hall college. All rights reserved.</p>
          </div>
        </div>

      </div>

      {/* Decorative Line Art / SVG matching your design */}
      <div className="footer-art-line">
        <svg viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C100 10 150 50 250 25C350 0 400 45 500 15" stroke="rgba(231, 111, 81, 0.4)" strokeWidth="1.5"/>
        </svg>
      </div>
    </footer>
  );
}