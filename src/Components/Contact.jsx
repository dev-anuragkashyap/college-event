import React, { useState } from 'react';
import './Contact.css';
import { MapPin, Mail, Phone, Headphones, Send, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "How do I register for an event?", a: "You can register by browsing the events page, selecting your desired event, and clicking the register button." },
    { q: "Can I join multiple events at once?", a: "Yes, you can register for as many non-overlapping events as you like." },
    { q: "Is there a registration fee?", a: "Most campus events are free, but special competitions or fests may have nominal entry charges." },
    { q: "How can I get updates about new events?", a: "Enable notifications or subscribe to our newsletter channels." },
    { q: "Can I upload photos from an event?", a: "Yes, registered attendees can upload event captures through the community gallery portal." },
    { q: "How do I contact a specific club?", a: "Each club profile page includes a direct contact or coordinator email link." }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay" />
        <img 
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=80" 
          alt="Concert Crowd" 
          className="contact-hero-image"
        />
        <div className="contact-hero-content">
          <div className="contact-tag">
            <span className="contact-tag-line"></span> LET'S CONNECT
          </div>
          <h1 className="contact-hero-title">
            Get in Touch
          </h1>
          <p className="contact-hero-desc">
            We’d love to hear from you! Whether you have a question, feedback or just want to say hi — we’re here for you.
          </p>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="contact-wrapper">
        
        {/* Top 4 Info Cards */}
        <div>
          <div className="contact-section-header-top">
            <div className="contact-tag contact-tag-pink">
              <span className="contact-tag-line-pink"></span> Contact Information
            </div>
            <p className="contact-section-sub">Reach out to us through any of the channels below.</p>
          </div>

          <div className="contact-info-grid">
            {[
              { icon: <MapPin className="contact-card-icon" />, title: "Campus Office", detail: "Block B, Student Center Green Valley College Pune, Maharashtra 411001", link: "View on Map →" },
              { icon: <Mail className="contact-card-icon" />, title: "Email Us", detail: "hello@campusevents.in", sub: "We reply within 24 hours." },
              { icon: <Phone className="contact-card-icon" />, title: "Phone", detail: "+91 98765 43210", sub: "Mon – Fri, 9:00 AM – 6:00 PM" },
              { icon: <Headphones className="contact-card-icon" />, title: "Event Support", detail: "support@campusevents.in", sub: "For event related queries" }
            ].map((card, idx) => (
              <div key={idx} className="contact-info-card">
                <div>
                  <div className="contact-icon-box">
                    {card.icon}
                  </div>
                  <h3 className="contact-card-title">{card.title}</h3>
                  <p className="contact-card-detail">{card.detail}</p>
                  {card.sub && <p className="contact-card-sub">{card.sub}</p>}
                </div>
                {card.link && <span className="contact-card-link">{card.link}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Message Form & Map Grid */}
        <div className="contact-grid-main">
          
          {/* Form Section */}
          <div className="contact-form-box">
            <div className="contact-tag contact-tag-pink" style={{ marginBottom: '0.25rem' }}>SEND US A MESSAGE</div>
            <h2 className="contact-box-title">We’d love to hear from you</h2>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label className="contact-label">Name *</label>
                  <input type="text" placeholder="Your full name" className="contact-input" />
                </div>
                <div className="contact-input-group">
                  <label className="contact-label">Email *</label>
                  <input type="email" placeholder="you@example.com" className="contact-input" />
                </div>
              </div>

              <div className="contact-input-group">
                <label className="contact-label">Subject *</label>
                <select className="contact-input contact-select">
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Event Support</option>
                  <option>Collaboration</option>
                </select>
              </div>

              <div className="contact-input-group">
                <label className="contact-label">Message *</label>
                <textarea rows="4" placeholder="Type your message here..." className="contact-input contact-textarea"></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          {/* Location Map Section */}
          <div className="contact-map-box">
            <div>
              <div className="contact-map-preview">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="College Campus" />
              </div>
              <h3 className="contact-map-title">Our Location</h3>
              <p className="contact-map-location">Green Valley College, Pune</p>
              
              <div className="contact-map-simulated">
                Interactive Map View
              </div>
            </div>

            <button className="contact-map-btn">
              View on Google Maps &rarr;
            </button>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="contact-faq-box">
          <div className="contact-faq-header">
            <div>
              <div className="contact-tag contact-tag-pink" style={{ marginBottom: '0.25rem' }}>FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="contact-box-title" style={{ marginBottom: 0 }}>Need Help?</h2>
            </div>
            <span className="contact-faq-view-all">View All FAQs &rarr;</span>
          </div>

          <div className="contact-faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="contact-faq-item">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="contact-faq-question"
                >
                  {faq.q}
                  <ChevronDown className={`contact-chevron ${openFaq === idx ? 'rotate' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="contact-faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}