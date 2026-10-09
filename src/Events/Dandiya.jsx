import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DandiyaNight.css';
import { Calendar as CalendarIcon, MapPin, Clock, Music, Sparkles, Camera, ArrowRight, Heart, QrCode, Navigation, ExternalLink } from 'lucide-react';

// Import local assets including QR code and gallery images
import dandiyaHeroImg from '../assets/cultural.jpg';
import qrCodeImg from '../assets/logo.jpeg'; 
import gallery1 from '../assets/memory1.jpg';
import gallery2 from '../assets/memory2.jpg';
import gallery3 from '../assets/memory3.jpg';
import gallery4 from '../assets/memory4.jpg';
import memory1 from '../assets/memory1.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';
import memory4 from '../assets/memory4.jpg';

export default function DandiyaNight() {
  const navigate = useNavigate();

  // Target Date for Dandiya Night (October 15, 2026 at 00:00:00)
  const targetDate = new Date('2026-10-15T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ 
          days: String(days).padStart(2, '0'), 
          hours: String(hours).padStart(2, '0'), 
          minutes: String(minutes).padStart(2, '0'), 
          seconds: String(seconds).padStart(2, '0') 
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const highlights = [
    { id: 1, title: "Live Music", icon: Music, desc: "Feel the beats with our amazing live band & DJ." },
    { id: 2, title: "Dandiya Dance", icon: Sparkles, desc: "Dance to the traditional rhythms of Garba & Dandiya." },
    { id: 3, title: "Cultural Shows", icon: Heart, desc: "Witness spectacular performances by our talented students." },
    { id: 4, title: "Photography", icon: Camera, desc: "Capture the best moments with professional photographers." }
  ];

  const scheduleItems = [
    { time: "05:00 PM", title: "Gates Open & Entry", desc: "Participant check-in and security verification." },
    { time: "05:30 PM", title: "Welcome & Aarti", desc: "Traditional dance ceremony to inaugurate the evening." },
    { time: "06:00 PM", title: "Garba Workshop", desc: "Learn the basic steps and get in the groove." },
    { time: "06:45 PM", title: "Live Music Performance", desc: "Feel the energy with live musical performances." },
    { time: "07:30 PM", title: "Dandiya Night", desc: "Non-stop music and dancing till late night." },
    { time: "09:00 PM", title: "DJ & Finale", desc: "Final energetic dance session of the night." }
  ];

  // At least 8 images displayed on the page
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, memory1, memory2, memory3, memory4];

  return (
    <div className="dn-container fade-in-page">
      
      {/* HERO SECTION */}
      <div className="dn-hero">
        <div className="dn-hero-overlay" />
        <img src={dandiyaHeroImg} alt="Dandiya Night Celebration" className="dn-hero-bg" />
        
        <div className="dn-hero-content">
          <span className="dn-badge">TRADITION • DANCE • CELEBRATION</span>
          <h1 className="dn-title">Dandiya Night 2026</h1>
          
          <div className="dn-meta-row">
            <span className="dn-meta-pill">
              <CalendarIcon className="w-4 h-4 text-amber-300" /> 15 October 2026
            </span>
            <span className="dn-separator">|</span>
            <span className="dn-meta-pill">
              <MapPin className="w-4 h-4 text-amber-300" /> College Ground, Lucknow
            </span>
          </div>

          <p className="dn-hero-desc">
            Join us for a vibrant evening of Garba, Dandiya and cultural performances as we celebrate the spirit of Navratri together!
          </p>
        </div>
      </div>

      {/* COUNTDOWN BANNER SECTION */}
      <section className="dn-countdown-section">
        <div className="dn-countdown-inner">
          <h3 className="dn-countdown-heading">🌸 Event Starts In 🌸</h3>

          <div className="dn-timer-grid">
            <div className="dn-timer-box">
              <span className="dn-timer-num">{timeLeft.days}</span>
              <span className="dn-timer-lbl">Days</span>
            </div>
            <div className="dn-timer-box">
              <span className="dn-timer-num">{timeLeft.hours}</span>
              <span className="dn-timer-lbl">Hours</span>
            </div>
            <div className="dn-timer-box">
              <span className="dn-timer-num">{timeLeft.minutes}</span>
              <span className="dn-timer-lbl">Minutes</span>
            </div>
            <div className="dn-timer-box">
              <span className="dn-timer-num">{timeLeft.seconds}</span>
              <span className="dn-timer-lbl">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAVBAR STRIP */}
      <nav className="dn-nav-strip">
        <div className="dn-nav-strip-inner">
          <a href="#about" className="dn-nav-link">About</a>
          <a href="#highlights" className="dn-nav-link">Highlights</a>
          <a href="#schedule-venue" className="dn-nav-link">Schedule & Venue</a>
          <a href="#gallery" className="dn-nav-link">Gallery</a>
        </div>
      </nav>

      {/* ABOUT THE EVENT SECTION */}
      <section id="about" className="dn-section dn-about-section">
        <div className="dn-about-grid">
          <div className="dn-about-text">
            <h2>About the Event</h2>
            <p>
              Dandiya Night is one of the most vibrant cultural celebrations of our college. It brings students together to celebrate Navratri with music, dance and traditional vibes. Get ready for an evening full of rhythm, colors and joy!
            </p>
            <div className="dn-about-sub-pills">
              <span>👥 Students Together</span>
              <span>❤️ Culture & Tradition</span>
              <span>⭐ Fun & Memories</span>
            </div>
          </div>
          <div className="dn-badge-card">
            <span>Dance</span>
            <span>Music</span>
            <span>Fun</span>
          </div>
        </div>
      </section>

      {/* EVENT HIGHLIGHTS SECTION */}
      <section id="highlights" className="dn-section">
        <h2 className="dn-section-title">Event Highlights</h2>
        
        <div className="dn-highlights-grid">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="dn-highlight-card">
                <div className="dn-highlight-icon-wrap">
                  <IconComponent className="w-7 h-7 text-rose-600" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REGISTER NOW & QR CODE SCANNER SECTION */}
      <section className="dn-section">
        <div className="dn-register-banner">
          <div className="dn-reg-left">
            <h2>Register Now</h2>
            <p>Don't miss out on this colorful celebration!</p>
            <span className="dn-reg-sub">Open for all students and friends. Come, dance, and be a part of this unforgettable night!</span>
            <button className="dn-reg-btn" onClick={() => alert("Redirecting to registration form...")}>
              REGISTER NOW &rarr;
            </button>
          </div>
          
          <div className="dn-reg-right-wrap">
            <div className="dn-reg-details-list">
              <div className="dn-reg-info-item">
                <CalendarIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Date</strong>
                  <span>15 October 2026</span>
                </div>
              </div>
              <div className="dn-reg-info-item">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Time</strong>
                  <span>05:00 PM – 10:00 PM</span>
                </div>
              </div>
              <div className="dn-reg-info-item">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Venue</strong>
                  <span>College Ground, Lucknow</span>
                </div>
              </div>
            </div>

            {/* QR Code Scanner Section */}
            <div className="dn-qr-card">
              <img src={qrCodeImg} alt="Scan to Register QR Code" className="dn-qr-img" />
              <div className="dn-qr-text">
                <QrCode className="w-4 h-4 text-rose-600 inline mr-1" />
                <strong>SCAN TO REGISTER</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMBINED EVENT SCHEDULE & VENUE SECTION (Proper mapping with comments for future changes) */}
      <section id="schedule-venue" className="dn-section">
        <div className="dn-schedule-venue-wrapper">
          
          {/* SCHEDULE COLUMN */}
          <div className="dn-schedule-box">
            <h2 className="dn-section-title">Event Schedule</h2>
            <p className="dn-section-sub">Planned timeline for the celebration.</p>

            <div className="dn-schedule-timeline">
              {/* FUTURE SCHEDULE MAPPING: Update scheduleItems array above to modify timeline events */}
              {scheduleItems.map((sched, idx) => (
                <div key={idx} className="dn-schedule-item">
                  <div className="dn-sched-time">{sched.time}</div>
                  <div className="dn-sched-marker" />
                  <div className="dn-sched-content">
                    <h4>{sched.title}</h4>
                    <p>{sched.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VENUE & DIRECTIONS COLUMN */}
          <div className="dn-venue-box">
            <h2 className="dn-section-title">Venue & Directions</h2>
            <p className="dn-section-sub">How to reach the location.</p>

            <div className="dn-venue-card-inner">
              {/* 
                FUTURE LOCATION MAPPING: 
                To change location coordinates or map embed URL in the future, 
                update the address text below and replace the map container link.
              */}
              <div className="dn-venue-details">
                <h4 className="font-bold text-lg text-slate-900 mb-1">College Ground</h4>
                <p className="text-sm text-gray-600 mb-4">Our college ground, Lucknow</p>
                
                <div className="dn-venue-perks">
                  <span>🚌 Easy to Reach by Bus / Auto / Bike</span>
                  <span>🅿️ Parking Available (Limited Parking)</span>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dn-directions-btn"
                >
                  Get Directions &rarr;
                </a>
              </div>

              <div className="dn-map-fake-box">
                <Navigation className="w-8 h-8 text-rose-600 animate-bounce" />
                <span>Interactive Map View</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PHOTO GALLERY SECTION (Showing at least 8 images with redirect to full gallery) */}
      <section id="gallery" className="dn-section">
        <h2 className="dn-section-title">Photo Gallery</h2>
        <p className="dn-section-sub">Moments that made last year special. Be a part of this year's story!</p>

        <div className="dn-gallery-grid">
          {galleryImages.map((imgSrc, idx) => (
            <div key={idx} className="dn-gallery-card" onClick={() => navigate('/gallery')}>
              <img src={imgSrc} alt="Dandiya Memory" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            className="dn-directions-btn" 
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery in Media Archives &rarr;
          </button>
        </div>
      </section>

      {/* RULES & SAFETY FOOTER INFO */}
      <section className="dn-section dn-rules-section">
        <div className="dn-rules-box">
          <h3>Rules & Safety</h3>
          <ul>
            <li>✔ No alcohol, drugs or smoking.</li>
            <li>✔ Maintain decorum and respect everyone.</li>
            <li>✔ Use only designated areas.</li>
            <li>✔ Follow security instructions.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}