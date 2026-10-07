import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedinIn,FaInstagram ,FaTwitter,FaFacebook } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import contactHeroImg from '../assets/contact-hero.jpeg'; // Local campus image for hero section

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  {/* Hero Header with Campus Image Background & Fade-In Animation */}
<div className="contact-hero">
  <div className="contact-hero-overlay" />
  <img src={contactHeroImg} alt="Campus Building" className="contact-hero-bg fade-in-img" />
  <div className="contact-hero-content">
    <span className="contact-badge">Get In Touch</span>
    <h1 className="contact-title">We'd Love to Hear From You</h1>
    <p className="contact-desc">
      Have questions about fests, registrations, or sponsorships? Reach out to our team or drop us a message below.
    </p>
  </div>
</div>

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How can I register for upcoming campus events?",
      a: "You can click on 'View Details' on any event card on the home page or events page to access registration links and forms."
    },
    {
      q: "Are external college students allowed to participate in fests?",
      a: "Yes! Most of our major cultural and technical fests welcome participants from other colleges with valid student IDs."
    },
    {
      q: "How do I volunteer or join the organizing committee?",
      a: "Reach out to us via the contact form or visit our student council office on campus during working hours."
    },
    {
      q: "Where can I find past event photos and gallery archives?",
      a: "Head over to the Photo Gallery section or page to filter and download high-resolution memories from all past events."
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram className="w-5 h-5" />, name: "Instagram", handle: "@campusevents_2026", color: "#E1306C", url: "#" },
    { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter / X", handle: "@CampusEventsHQ", color: "#1DA1F2", url: "#" },
    { icon: <FaFacebook className="w-5 h-5" />, name: "Facebook", handle: "Campus Events Official", color: "#4267B2", url: "#" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, name: "LinkedIn", handle: "CampusEvents Network", color: "#0077B5", url: "#" }
  ];

  return (
    <div className="contact-container fade-in-page">
      
      {/* Hero Header */}
      <div className="contact-hero">
        <div className="contact-badge">Get In Touch</div>
        <h1 className="contact-title">We'd Love to Hear From You</h1>
        <p className="contact-desc">
          Have questions about fests, registrations, or sponsorships? Reach out to our team or drop us a message below.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* Top Grid: Contact Form & Info / Map */}
        <div className="contact-main-grid">
          
          {/* Left: Contact Form */}
          <div className="contact-card form-card">
            <h3 className="contact-card-title"><MessageSquare className="w-5 h-5 text-teal-600" /> Send Us a Message</h3>
            
            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Anurag Kashyap" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="student@college.edu" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Event Registration Inquiry" 
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Write your message here..." 
                    required 
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Details & Interactive Map */}
          <div className="contact-right-column">
            
            <div className="contact-card info-card">
              <h3 className="contact-card-title">Contact Information</h3>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-box"><MapPin className="w-5 h-5 text-teal-600" /></div>
                  <div>
                    <strong>Campus Location</strong>
                    <p>Main Auditorium Block, College Campus, Main Road</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box"><Phone className="w-5 h-5 text-teal-600" /></div>
                  <div>
                    <strong>Phone Support</strong>
                    <p>+91 (522) 123-4567 / +91 98765-43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box"><Mail className="w-5 h-5 text-teal-600" /></div>
                  <div>
                    <strong>Email Address</strong>
                    <p>events@campusevents.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Widget */}
            <div className="contact-card map-card">
              <h3 className="contact-card-title">Find Us on Map</h3>
              <div className="map-frame-wrap">
                <iframe 
                  title="Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3957864457385!2d80.946165!3d26.846708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTAnNDguMiJOIDjwwKw1NicyLjYiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="180" 
                  style={{ border: 0, borderRadius: '0.75rem' }} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Social Media Cards Section */}
        <section className="contact-social-section">
          <div className="contact-center-header">
            <h2 className="contact-section-heading">Connect With Us Online</h2>
            <p className="contact-section-sub">Follow our official channels for live updates, reels, and announcements.</p>
          </div>

          <div className="contact-social-grid">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.url} className="contact-social-card hover-lift" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-circle" style={{ backgroundColor: `${social.color}15`, color: social.color }}>
                  {social.icon}
                </div>
                <div>
                  <h4 className="social-name">{social.name}</h4>
                  <span className="social-handle">{social.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) Section */}
        <section className="contact-faq-section">
          <div className="contact-center-header">
            <h2 className="contact-section-heading">Frequently Asked Questions</h2>
            <p className="contact-section-sub">Got questions? We've got answers.</p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`contact-faq-item ${openFaq === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                <div className="faq-question-row">
                  <h4>{faq.q}</h4>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-teal-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
                {openFaq === idx && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}