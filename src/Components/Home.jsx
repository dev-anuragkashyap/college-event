import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Calendar as CalendarIcon, MapPin,Volleyball, Clock, ArrowRight, Camera, Sparkles, Music, Trophy, Utensils, Disc, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your local assets from the assets folder
import heroBgImg from '../assets/hero-bg.jpeg';
import dandiyaImg from '../assets/dandiya.jpg';
import culturalFestImg from '../assets/cultural.jpg';
import culturalFest2 from '../assets/memory1.jpg';
import culturalFest3 from '../assets/memory2.jpg';
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

  // Dynamic Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Gallery Category Filter State
  const [activeFilter, setActiveFilter] = useState('All');

  // Calendar State (Defaulting to October 2026 as per reference)
  const [selectedDate, setSelectedDate] = useState(7); // default 7 Oct

  useEffect(() => {
    const targetDate = new Date('2026-10-12T00:00:00').getTime();

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
    { id: 1, title: "Dandiya Night", date: "15 Oct 2026", location: "College Ground", img: dandiyaImg },
    { id: 2, title: "Annual Fest", date: "20 Nov 2026", location: "College Campus", img: annualFestImg },
    { id: 3, title: "Freshers Party", date: "05 Dec 2026", location: "Auditorium", img: freshersImg },
    { id: 4, title: "Sports Day", date: "14 Dec 2026", location: "Sports Ground", img: sportsImg }
  ];

  const pastEvents = [
    { id: 101, title: "Freshers Party 2025", date: "16 Aug 2025", location: "College Ground", img: pastFreshersImg },
    { id: 102, title: "Sports Day 2025", date: "20 Mar 2025", location: "Sports Ground", img: pastSportsImg },
    { id: 103, title: "Annual Fest 2025", date: "10 Dec 2025", location: "Auditorium", img: pastAnnualImg },
    { id: 104, title: "Cultural Night 2025", date: "01 Nov 2025", location: "College Ground", img: pastCulturalImg }
  ];

  const galleryImages = [
    { img: culturalFestImg, category: 'Cultural', span: 'tall' },
    { img: culturalFest2, category: 'Festival', span: 'small' },
    { img: memory2, category: 'Cultural', span: 'small' },
    { img: culturalFest3, category: 'Tech', span: 'tall' },
    { img: sportsImg, category: 'Sports', span: 'small' },
    { img: memory3, category: 'Campus Life', span: 'small' },
    { img: memory4, category: 'Festival', span: 'small' }
  ];

  const filteredGallery = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(item => item.category === activeFilter);

  // Calendar events mapping based on selected date
  const calendarEventsMap = {
    7: [
      { title: "Cultural Fest 2026", location: "Main Ground • 12:00 AM", type: "ongoing" },
      { title: "Photography Workshop", location: "Seminar Hall • 2:00 PM", type: "upcoming" },
      { title: "Basketball Match", location: "Sports Complex • 4:00 PM", type: "past" }
    ],
    12: [
      { title: "Hackathon 2026", location: "CS Lab 3 • 10:00 AM", type: "upcoming" },
      { title: "Robotics Exhibition", location: "Auditorium • 3:30 PM", type: "upcoming" }
    ],
    15: [
      { title: "Dandiya Night", location: "College Ground • 6:00 PM", type: "upcoming" }
    ],
    default: [
      { title: "Campus Meetup", location: "Main Hall • 11:00 AM", type: "upcoming" }
    ]
  };

  const currentDayEvents = calendarEventsMap[selectedDate] || calendarEventsMap.default;

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
        {/*Campus Visit Section*/}
         <section>
          <div className="home-current-event-container" onClick={() => handleEventClick(999)}>
            <div className="home-current-left">
              <div className="home-current-tag">Upcoming Event</div>
              <h2 className="home-current-title">College Visit</h2>
              <p className="home-current-subtitle">Study hall School student visiting Study Hall College</p>
              
              <div className="home-current-meta-row">
                <div className="home-current-meta-item">
                  <CalendarIcon className="w-4 h-4 text-teal-600" />
                  <div>
                    <span>Coming Soon</span>
                  </div>
                </div>
                <div className="home-current-meta-item">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>Main Campus</strong>
                    <span>Academic Building</span>
                  </div>
                </div>
              </div>

              <div className="home-current-tags-grid">
                <span className="home-current-pill"><Music className="w-3.5 h-3.5" /> Performances</span>
                <span className="home-current-pill"><Trophy className="w-3.5 h-3.5" /> Competitions</span>
                <span className="home-current-pill"><Volleyball className="w-3.5 h-3.5" /> Sports </span>
                <span className="home-current-pill"><Disc className="w-3.5 h-3.5" /> Study</span>
              </div>

              <div className="home-large-countdown-wrapper">
                <span className="home-countdown-label-top">Remaining Time For Event</span>
                <div className="home-large-countdown-grid">
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.days}</span>
                    <span className="home-lg-label">Days</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.hours}</span>
                    <span className="home-lg-label">Hours</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.minutes}</span>
                    <span className="home-lg-label">Mins</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.seconds}</span>
                    <span className="home-lg-label">Secs</span>
                  </div>
                </div>
              </div>

              <button className="home-current-explore-btn" onClick={(e) => { e.stopPropagation(); handleEventClick(999); }}>
                View Full Details &rarr;
              </button>
            </div>

            <div className="home-current-right">
              <div className="home-polaroid main-polaroid">
                <img src={culturalFestImg} alt="Cultural Fest Main" />
              </div>
              <div className="home-polaroid side-polaroid-top">
                <img src={culturalFest2} alt="Cultural Fest Crowd" />
              </div>
              <div className="home-polaroid side-polaroid-bottom">
                <img src={culturalFest3} alt="Cultural Fest Performance" />
              </div>
              <div className="home-polaroid-watermark">Good Vibes Only</div>
            </div>
          </div>
        </section>

        
        {/* CURRENT EVENT & ENLARGED COUNTDOWN SECTION */}
        <section>
          <div className="home-current-event-container" onClick={() => handleEventClick(999)}>
            <div className="home-current-left">
              <div className="home-current-tag">Upcoming Event</div>
              <h2 className="home-current-title">Dandiya Night 2026</h2>
              <p className="home-current-subtitle">Three days of music, dance, drama, creativity and celebration.</p>
              
              <div className="home-current-meta-row">
                <div className="home-current-meta-item">
                  <CalendarIcon className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>Day 2 of 3</strong>
                    <span>Coming Soon</span>
                  </div>
                </div>
                <div className="home-current-meta-item">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>Main Campus</strong>
                    <span>College Ground</span>
                  </div>
                </div>
              </div>

              <div className="home-current-tags-grid">
                <span className="home-current-pill"><Music className="w-3.5 h-3.5" /> Performances</span>
                <span className="home-current-pill"><Trophy className="w-3.5 h-3.5" /> Competitions</span>
                <span className="home-current-pill"><Utensils className="w-3.5 h-3.5" /> Food Stalls</span>
                <span className="home-current-pill"><Disc className="w-3.5 h-3.5" /> DJ Night</span>
              </div>

              <div className="home-large-countdown-wrapper">
                <span className="home-countdown-label-top">Remaining Time For Event</span>
                <div className="home-large-countdown-grid">
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.days}</span>
                    <span className="home-lg-label">Days</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.hours}</span>
                    <span className="home-lg-label">Hours</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.minutes}</span>
                    <span className="home-lg-label">Mins</span>
                  </div>
                  <div className="home-lg-cd-box">
                    <span className="home-lg-number">{timeLeft.seconds}</span>
                    <span className="home-lg-label">Secs</span>
                  </div>
                </div>
              </div>

              <button className="home-current-explore-btn" onClick={(e) => { e.stopPropagation(); handleEventClick(999); }}>
                View Full Details &rarr;
              </button>
            </div>

            <div className="home-current-right">
              <div className="home-polaroid main-polaroid">
                <img src={culturalFestImg} alt="Cultural Fest Main" />
              </div>
              <div className="home-polaroid side-polaroid-top">
                <img src={culturalFest2} alt="Cultural Fest Crowd" />
              </div>
              <div className="home-polaroid side-polaroid-bottom">
                <img src={culturalFest3} alt="Cultural Fest Performance" />
              </div>
              <div className="home-polaroid-watermark">Good Vibes Only</div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="home-modern-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <CalendarIcon className="w-5 h-5 text-indigo-600" />
              <h3 className="home-section-main-title">Upcoming Events</h3>
            </div>
            <span className="home-view-all" onClick={() => navigate('/events')}>View All &rarr;</span>
          </div>

          <div className="home-grid-3">
            {upcomingEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="home-modern-card" onClick={() => handleEventClick(event.id)}>
                <div className="home-modern-img-wrap">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="home-modern-body">
                  <h4 className="home-modern-title">{event.title}</h4>
                  <div className="home-modern-info-row">
                    <span><CalendarIcon className="w-3.5 h-3.5 text-gray-400" /> {event.date}</span>
                    <span><MapPin className="w-3.5 h-3.5 text-gray-400" /> {event.location}</span>
                  </div>
                  <button className="home-modern-btn">View Event &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Grid */}
        <section className="home-modern-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <Clock className="w-5 h-5 text-indigo-600" />
              <h3 className="home-section-main-title">Past Events</h3>
            </div>
            <span className="home-view-all" onClick={() => navigate('/events')}>View All &rarr;</span>
          </div>

          <div className="home-grid-3">
            {pastEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="home-modern-card" onClick={() => handleEventClick(event.id)}>
                <div className="home-modern-img-wrap">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="home-modern-body">
                  <h4 className="home-modern-title">{event.title}</h4>
                  <div className="home-modern-info-row">
                    <span><CalendarIcon className="w-3.5 h-3.5 text-gray-400" /> {event.date}</span>
                    <span><MapPin className="w-3.5 h-3.5 text-gray-400" /> {event.location}</span>
                  </div>
                  <button className="home-modern-btn-outline">Gallery &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* MOMENTS THAT MATTER GALLERY SECTION */}
      <section className="home-moments-section">
        <div className="home-wrapper" style={{ paddingBottom: '3rem' }}>
          
          <div className="home-moments-topbar">
            <div>
              <span className="home-moments-tag">PHOTO GALLERY</span>
              <h2 className="home-moments-title">Moments That Matter</h2>
              <p className="home-moments-subtitle">Explore the best moments from our events.</p>
            </div>

            <div className="home-moments-filters">
              {['All', 'Cultural', 'Tech', 'Sports', 'Festival', 'Campus Life'].map((category) => (
                <button
                  key={category}
                  className={`home-filter-pill ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="home-moments-grid">
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx} 
                className={`home-moment-card ${item.span === 'tall' ? 'moment-tall' : 'moment-normal'}`}
                onClick={() => navigate('/gallery')}
              >
                <img src={item.img} alt="Gallery Moment" />
              </div>
            ))}

            <div className="home-moment-card moment-dark-card" onClick={() => navigate('/gallery')}>
              <div className="moment-dark-content">
                <Camera className="w-6 h-6 text-white mb-2" />
                <span>View Full Gallery &rarr;</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EVENT CALENDAR SECTION ("Find Your Date") */}
      <section className="home-calendar-section">
        <div className="home-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          
          <div className="home-calendar-container">
            
            {/* Left Column: Title, Subtitle & Legend */}
            <div className="home-cal-left">
              <span className="home-moments-tag">EVENT CALENDAR</span>
              <h2 className="home-moments-title">Find Your Date</h2>
              <p className="home-moments-subtitle mb-4">Stay updated with all upcoming and ongoing events.</p>

              <div className="home-cal-legend">
                <div className="home-legend-item">
                  <span className="home-dot ongoing"></span> Ongoing
                </div>
                <div className="home-legend-item">
                  <span className="home-dot upcoming"></span> Upcoming
                </div>
                <div className="home-legend-item">
                  <span className="home-dot past"></span> Past Event
                </div>
              </div>
            </div>

            {/* Middle Column: Interactive Calendar Widget */}
            <div className="home-cal-widget">
              <div className="home-cal-header">
                <button className="home-cal-nav-btn"><ChevronLeft className="w-4 h-4" /></button>
                <span className="home-cal-month-title">October 2026</span>
                <button className="home-cal-nav-btn"><ChevronRight className="w-4 h-4" /></button>
              </div>

              <div className="home-cal-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="home-cal-day-name">{day}</div>
                ))}

                {/* Calendar Days */}
                {[...Array(31)].map((_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDate === dayNum;
                  const hasEvent = [3, 14, 16, 20, 24, 28].includes(dayNum);
                  const isOngoing = dayNum === 7;
                  const isPast = dayNum < 5;

                  return (
                    <div 
                      key={dayNum} 
                      className={`home-cal-date ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedDate(dayNum)}
                    >
                      <span>{dayNum}</span>
                      {hasEvent && (
                        <span className={`home-cal-dot ${isOngoing ? 'ongoing' : isPast ? 'past' : 'upcoming'}`}></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Events List for Selected Date */}
            <div className="home-cal-events-list">
              <h4 className="home-cal-list-title">Events on {selectedDate} Oct</h4>
              
              <div className="home-cal-items-wrap">
                {currentDayEvents.map((evt, idx) => (
                  <div key={idx} className="home-cal-event-card" onClick={() => navigate('/events')}>
                    <div className="home-cal-event-info">
                      <span className={`home-dot ${evt.type}`} style={{ display: 'inline-block', marginRight: '6px' }}></span>
                      <div>
                        <strong>{evt.title}</strong>
                        <small>{evt.location}</small>
                      </div>
                    </div>
                    <span className="home-cal-arrow">&rsaquo;</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}