import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Calendar, MapPin, Clock, ArrowRight, Camera } from 'lucide-react';

// Import your local assets here as needed
import heroBgImg from '../assets/hero-bg.jpeg';
import dandiyaImg from '../assets/dandiya.jpg';
import annualFestImg from '../assets/annual.jpg';
import freshersImg from '../assets/freshers.jpg';
import sportsImg from '../assets/sports.jpg';

import pastFreshersImg from '../assets/past-freshers.jpg';
import pastSportsImg from '../assets/past-sports.webp';
import pastAnnualImg from '../assets/past-annual.jpg';
import pastCulturalImg from '../assets/past-cultural.jpg';

import memory1 from '../assets/memory1.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';
import memory4 from '../assets/memory4.jpg';
import memory5 from '../assets/memory5.jpg';

export default function Home() {
  const navigate = useNavigate();

  // Dynamic Countdown Timer State targeting Dandiya Night (16 October 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-16T00:00:00').getTime();

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
  }, []);

  const upcomingEvents = [
    { id: 1, title: "Dandiya Night", date: "18 Oct 2026", location: "College Ground", img: dandiyaImg },
    { id: 2, title: "Annual Fest", date: "28 Nov 2026", location: "College Ground", img: annualFestImg },
    { id: 3, title: "Freshers Party", date: "08 Dec 2026", location: "Auditorium", img: freshersImg },
    { id: 4, title: "Sports Day", date: "14 Dec 2026", location: "Sports Ground", img: sportsImg }
  ];

  const pastEvents = [
    { id: 101, title: "Freshers Party 2025", date: "16 Aug 2025", location: "College Ground", img: pastFreshersImg },
    { id: 102, title: "Sports Day 2025", date: "20 Mar 2025", location: "Sports Ground", img: pastSportsImg },
    { id: 103, title: "Annual Fest 2025", date: "10 Dec 2025", location: "Auditorium", img: pastAnnualImg },
    { id: 104, title: "Cultural Night 2025", date: "01 Nov 2025", location: "College Ground", img: pastCulturalImg }
  ];

  const memories = [memory1, memory2, memory3, memory4, memory5];

  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="home-container fade-in-page">
      
      {/* Hero Section */}
      <div className="home-hero">
        <div className="home-hero-overlay" />
        <img 
          src={heroBgImg} 
          alt="College Event Crowd" 
          className="home-hero-image"
        />
        <div className="home-hero-content">
          <div className="home-hero-badges">
            <span>Celebrate</span> • <span>Participate</span> • <span>Remember</span>
          </div>
          <h1 className="home-hero-title">
            College Events <br />
            <span>2026</span>
          </h1>
          <p className="home-hero-desc">
            Discover every celebration, fest and activity happening in our college.
          </p>
          <button className="home-hero-btn" onClick={() => navigate('/events')}>
            Explore Events <ArrowRight className="w-4 h-4"/>
          </button>
          <div className="home-hero-watermark">Good Vibes Only</div>
        </div>
      </div>

      <div className="home-wrapper">
        
        {/* Dandiya Night 2026 Countdown Section (Matching Image Layout) */}
        <section>
          <div className="home-dandiya-section" onClick={() => handleEventClick(999)}>
            
            {/* Left Side: Event Details */}
            <div className="home-dandiya-left">
              <div className="home-dandiya-tag">
                <span className="home-dandiya-bar"></span> UPCOMING EVENT
              </div>
              <h2 className="home-dandiya-title">Dandiya Night 2026</h2>
              
              <div className="home-dandiya-meta">
                <span><Calendar className="w-3.5 h-3.5 text-teal-600"/> 16 October 2026</span>
                <span><MapPin className="w-3.5 h-3.5 text-teal-600"/> College Ground</span>
              </div>

              <p className="home-dandiya-desc">
                Get ready for an evening full of rhythm, energy and traditional vibes. Join us for Dandiya Night 2026 and be a part of the celebration!
              </p>

              <button className="home-dandiya-btn" onClick={(e) => { e.stopPropagation(); handleEventClick(999); }}>
                View Details &rarr;
              </button>
            </div>

            {/* Right Side: Dark Countdown Card with Silhouette Theme */}
            <div className="home-dandiya-right">
              <h3 className="home-countdown-heading">Countdown to Dandiya Night</h3>
              
              <div className="home-countdown-boxes-row">
                <div className="home-cd-box">
                  <span className="home-cd-number">{timeLeft.days}</span>
                  <span className="home-cd-label">Days</span>
                </div>
                <div className="home-cd-box">
                  <span className="home-cd-number">{timeLeft.hours}</span>
                  <span className="home-cd-label">Hours</span>
                </div>
                <div className="home-cd-box">
                  <span className="home-cd-number">{timeLeft.minutes}</span>
                  <span className="home-cd-label">Minutes</span>
                </div>
                <div className="home-cd-box">
                  <span className="home-cd-number">{timeLeft.seconds}</span>
                  <span className="home-cd-label">Seconds</span>
                </div>
              </div>

              {/* Decorative Silhouettes / Cultural Graphic Footer inside card */}
              <div className="home-dandiya-silhouettes"></div>
            </div>

          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section>
          <div className="home-section-header">
            <div>
              <div className="home-tag">
                <Calendar className="w-4 h-4"/> Upcoming Events
              </div>
              <p className="home-section-sub">Stuff you won't be missing next.</p>
            </div>
            <span className="home-view-all" onClick={() => navigate('/events')}>View All &rarr;</span>
          </div>

          <div className="home-grid-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="home-card" onClick={() => handleEventClick(event.id)}>
                <div className="home-card-img-wrap">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="home-card-body">
                  <h4 className="home-card-title">{event.title}</h4>
                  <p className="home-card-info"><Calendar className="w-3 h-3"/> {event.date}</p>
                  <p className="home-card-info"><MapPin className="w-3 h-3"/> {event.location}</p>
                  <button className="home-card-btn">View Event &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Grid */}
        <section>
          <div className="home-section-header">
            <div>
              <div className="home-tag">
                <Clock className="w-4 h-4"/> Past Events
              </div>
              <p className="home-section-sub">Memories that never fade.</p>
            </div>
            <span className="home-view-all" onClick={() => navigate('/events')}>View All &rarr;</span>
          </div>

          <div className="home-grid-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="home-card" onClick={() => handleEventClick(event.id)}>
                <div className="home-card-img-wrap">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="home-card-body">
                  <h4 className="home-card-title">{event.title}</h4>
                  <p className="home-card-info"><Calendar className="w-3 h-3"/> {event.date}</p>
                  <p className="home-card-info"><MapPin className="w-3 h-3"/> {event.location}</p>
                  <button className="home-card-btn-outline">View Memories &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Latest Memories Banner (Dark Section) */}
      <div className="home-memories-section">
        <div className="home-wrapper" style={{ padding: '4rem 1.5rem' }}>
          <div className="home-section-header" style={{ marginBottom: '2rem' }}>
            <div>
              <div className="home-tag home-tag-light">
                <Camera className="w-4 h-4"/> Latest Memories
              </div>
              <p className="home-section-sub-light">A glimpse of the unforgettable moments.</p>
            </div>
            <button className="home-btn-outline-light" onClick={() => navigate('/gallery')}>View Gallery &rarr;</button>
          </div>

          <div className="home-memories-grid">
            {memories.map((img, idx) => (
              <div key={idx} className="home-memory-img-wrap" onClick={() => navigate('/gallery')}>
                <img src={img} alt={`Memory ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}