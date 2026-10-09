import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DandiyaNight.css';
import { Calendar as CalendarIcon, MapPin, Clock, Music, Sparkles, Camera, ArrowRight, Heart } from 'lucide-react';

// Import local assets (adjust paths to your assets folder)
import dandiyaHeroImg from '../assets/cultural.jpg';
import gallery1 from '../assets/memory1.jpg';
import gallery2 from '../assets/memory2.jpg';
import gallery3 from '../assets/memory3.jpg';
import gallery4 from '../assets/memory4.jpg';

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
    { id: 1, title: "Live Music", icon: Music, desc: "Traditional & upbeat beats." },
    { id: 2, title: "Dandiya Dance", icon: Sparkles, desc: "Rhythmic stick dance celebrations." },
    { id: 3, title: "Cultural Shows", icon: Heart, desc: "Vibrant performances and showcases." },
    { id: 4, title: "Photography", icon: Camera, desc: "Capture your best ethnic moments." }
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4];

  return (
    <div className="dn-container fade-in-page">
      
      {/* Back Button */}
      <div className="dn-back-wrap">
        <button className="dn-back-btn" onClick={() => navigate('/')}>
          &larr; Back to Home
        </button>
      </div>

      {/* HERO SECTION (Register Now removed) */}
      <div className="dn-hero">
        <div className="dn-hero-overlay" />
        <img src={dandiyaHeroImg} alt="Dandiya Night Celebration" className="dn-hero-bg" />
        
        <div className="dn-hero-content">
          <span className="dn-badge">UPCOMING EVENT</span>
          <h1 className="dn-title">Dandiya Night 2026</h1>
          <p className="dn-tags">Dance • Music • Celebration • Togetherness</p>
          
          <div className="dn-meta-row">
            <span className="dn-meta-pill">
              <CalendarIcon className="w-4 h-4 text-amber-300" /> 15 October 2026
            </span>
            <span className="dn-separator">|</span>
            <span className="dn-meta-pill">
              <MapPin className="w-4 h-4 text-amber-300" /> College Ground
            </span>
          </div>
        </div>
      </div>

      {/* TABS NAVIGATION BAR */}
      <div className="dn-nav-strip">
        <div className="dn-nav-strip-inner">
          <a href="#about" className="dn-nav-link active">About</a>
          <a href="#highlights" className="dn-nav-link">Highlights</a>
          <a href="#gallery" className="dn-nav-link">Gallery</a>
        </div>
      </div>

      {/* ABOUT THE EVENT SECTION */}
      <section id="about" className="dn-section dn-about-section">
        <div className="dn-about-grid">
          <div className="dn-about-text">
            <h2>About the Event</h2>
            <p>
              Dandiya Night is one of the most vibrant cultural celebrations of our college. It brings students together to celebrate Navratri with music, dance and traditional vibes. Get ready for an evening full of rhythm, colors and joy!
            </p>
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

      {/* EVENT GALLERY SECTION */}
      <section id="gallery" className="dn-section">
        <h2 className="dn-section-title">Event Gallery</h2>
        <p className="dn-section-sub">Glimpses from our past Dandiya celebrations.</p>

        <div className="dn-gallery-grid">
          {galleryImages.map((imgSrc, idx) => (
            <div key={idx} className="dn-gallery-card">
              <img src={imgSrc} alt="Dandiya Memory" />
            </div>
          ))}
        </div>
      </section>

      {/* COUNTDOWN BANNER SECTION */}
      <section className="dn-countdown-section">
        <div className="dn-countdown-inner">
          <span className="dn-countdown-eyebrow">GET READY</span>
          <h2 className="dn-countdown-heading">Dandiya Night Begins In</h2>

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

    </div>
  );
}