import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Contact Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-text">Study Hall College</span>
          </div>
          
          <div className="footer-contact-info">
            <p><MdPhone className="f-icon" /> +91 84000 78621</p>
            <p><MdLocationOn className="f-icon" /> Piparsand - Kanpur Road<br />Lucknow (U.P.)</p>
            <p><MdEmail className="f-icon" /> info@studyhallcollege.org,<br />thestudyhallcollege@gmail.com</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <span className="col-line"></span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Upcoming Events (Replaces Our Campus) */}
        <div className="footer-col links-col">
          <h4>Upcoming Events</h4>
          <span className="col-line"></span>
          <ul>
            <li><Link to="/events/dandiya-night">Dandiya Night 2026</Link></li>
            <li><Link to="/events/young-minds-meet">Young Minds Meet</Link></li>
            <li><Link to="/events">All Campus Events</Link></li>
          </ul>
        </div>

        {/* Column 4: Main Website Links (Replaces All Programs) */}
        <div className="footer-col links-col">
          <h4>Main Website</h4>
          <span className="col-line"></span>
          <ul>
            <li>
              <a href="https://www.studyhallcollege.org" target="_blank" rel="noopener noreferrer">
                Official College Portal ↗
              </a>
            </li>
            <li>
              <a href="https://www.studyhallcollege.org" target="_blank" rel="noopener noreferrer">
                Admissions & Fee Structure ↗
              </a>
            </li>
            <li>
              <a href="https://www.studyhallcollege.org" target="_blank" rel="noopener noreferrer">
                Campus Facilities ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Visit Us (Map) */}
        <div className="footer-col visit-col">
          <h4>Visit Us</h4>
          <span className="col-line"></span>
          <div className="footer-map-wrapper">
            {/* 
              ADD YOUR MAP HERE: 
              Replace the iframe src below with your own Google Maps embed code or custom map URL when ready.
            */}
            <iframe 
              title="Study Hall College Map"
              src="https://maps.app.goo.gl/mG365winUyNWHJhJ6" 
              width="100%" 
              height="160" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar with Working Social Media Links */}
      <div className="footer-bottom-bar">
        <p>© 2026 Study Hall College. All Rights Reserved.</p>
        <div className="social-icons-row">
          <a href="https://www.facebook.com/StudyHallCollege/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/school/the-study-hall-college/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/studyhallcollege_official/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://x.com/studyhalcollege" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.youtube.com/@STUDYHALLCOLLEGE" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}