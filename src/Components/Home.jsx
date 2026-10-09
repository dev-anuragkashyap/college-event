import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Camera, Sparkles, Music, Trophy, Utensils, Disc, ChevronLeft, ChevronRight, Volleyball } from 'lucide-react';

// Import your local assets from the assets folder
import heroBgImg from '../assets/hero-bg.jpeg';
import culturalFestImg from '../assets/cultural.jpg';
import technovaImg from '../assets/annual.jpg';
import sportsMeetImg from '../assets/sports.jpg';
import openMicImg from '../assets/memory2.jpg';
import freshersImg from '../assets/freshers.jpg';

import pastFreshersImg from '../assets/past-freshers.jpg';
import pastSportsImg from '../assets/past-sports.webp';
import pastAnnualImg from '../assets/past-annual.jpg';
import pastCulturalImg from '../assets/past-cultural.jpg';

import culturalFest2 from '../assets/memory1.jpg';
import culturalFest3 from '../assets/memory2.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';
import memory4 from '../assets/memory4.jpg';

export default function Home() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [nearestEvent, setNearestEvent] = useState(null);
  const [dynamicPastEvents, setDynamicPastEvents] = useState([]);

  // Real Calendar Navigation State (Defaulting to October 2026)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 1)); // Month is 0-indexed (9 = October)
  const [selectedDate, setSelectedDate] = useState(14); // Default selected day

  // Master list of all events with exact timestamps and durations (in days)
  const allMasterEvents = [
    { 
      id: 1, 
      title: "Campus Visit 2026", 
      category: "College Tour", 
      date: "14 Oct 2026", 
      dateString: "14 October 2026",
      location: "Main Campus Ground", 
      targetDate: new Date('2026-10-14T00:00:00').getTime(),
      durationDays: 1, 
      img: culturalFestImg,
      routePath: "/events/young-minds-meet" 
    },
    { 
      id: 2, 
      title: "Dandiya Night", 
      category: "Cultural Fest", 
      date: "16 Oct 2026", 
      dateString: "16 October 2026",
      location: "College Ground", 
      targetDate: new Date('2026-10-16T10:00:00').getTime(),
      durationDays: 1,
      img: culturalFestImg,
      routePath: "/events/dandiya" 
    },
    { 
      id: 3, 
      title: "SPORTS MEET", 
      category: "Sports Championship", 
      date: "25 Oct 2026", 
      dateString: "25 October 2026",
      location: "College Ground", 
      targetDate: new Date('2026-10-25T09:00:00').getTime(),
      durationDays: 2,
      img: sportsMeetImg,
      routePath: "/events/3" 
    },
    { 
      id: 4, 
      title: "OPEN MIC NIGHT", 
      category: "Literary & Arts", 
      date: "02 Nov 2026", 
      dateString: "02 November 2026",
      location: "Seminar Hall", 
      targetDate: new Date('2026-11-02T17:00:00').getTime(),
      durationDays: 1,
      img: openMicImg,
      routePath: "/events/4" 
    },
    { 
      id: 5, 
      title: "FRESHERS PARTY", 
      category: "Welcome Event", 
      date: "12 Nov 2026", 
      dateString: "12 November 2026",
      location: "College Ground", 
      targetDate: new Date('2026-11-12T14:00:00').getTime(),
      durationDays: 1,
      img: freshersImg,
      routePath: "/events/5" 
    }
  ];

  // Static archives from previous years
  const staticPastEvents = [
    { id: 101, title: "FRESHER'S PARTY 2025", category: "Welcome Event", date: "16 Aug 2025", location: "College Ground", tag: "PAST EVENT", img: pastFreshersImg, routePath: "/events/101" },
    { id: 102, title: "SPORTS DAY 2025", category: "Sports Championship", date: "20 Mar 2025", location: "Sports Ground", tag: "PAST EVENT", img: pastSportsImg, routePath: "/events/102" },
    { id: 103, title: "ANNUAL FEST 2025", category: "Cultural Fest", date: "10 Dec 2025", location: "Auditorium", tag: "PAST EVENT", img: pastAnnualImg, routePath: "/events/103" },
    { id: 104, title: "CULTURAL NIGHT 2025", category: "Music & Dance", date: "01 Nov 2025", location: "College Ground", tag: "PAST EVENT", img: pastCulturalImg, routePath: "/events/104" }
  ];

  useEffect(() => {
    const updateCountdownAndEvents = () => {
      const now = new Date().getTime();

      const past = [];
      const upcoming = [];

      allMasterEvents.forEach(evt => {
        const eventEndTime = evt.targetDate + (evt.durationDays * 24 * 60 * 60 * 1000);
        if (now >= eventEndTime) {
          past.push({ ...evt, tag: "PAST EVENT" });
        } else {
          upcoming.push(evt);
        }
      });

      upcoming.sort((a, b) => a.targetDate - b.targetDate);

      const activeEvent = upcoming.length > 0 ? upcoming[0] : null;
      setNearestEvent(activeEvent);
      setDynamicPastEvents([...past, ...staticPastEvents]);

      if (activeEvent) {
        const difference = activeEvent.targetDate - now;

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
      }
    };

    updateCountdownAndEvents();
    const interval = setInterval(updateCountdownAndEvents, 1000);

    return () => clearInterval(interval);
  }, []);

  const whatsNextEvents = nearestEvent 
    ? allMasterEvents.filter(evt => evt.id !== nearestEvent.id && (evt.targetDate + (evt.durationDays * 24 * 60 * 60 * 1000)) > new Date().getTime())
    : [];

  const galleryImages = [
    { img: culturalFestImg, category: 'Cultural', span: 'tall' },
    { img: culturalFest2, category: 'Festival', span: 'small' },
    { img: memory2, category: 'Cultural', span: 'small' },
    { img: culturalFest3, category: 'Tech', span: 'tall' },
    { img: sportsMeetImg, category: 'Sports', span: 'small' },
    { img: memory3, category: 'Campus Life', span: 'small' },
    { img: memory4, category: 'Festival', span: 'small' }
  ];

  const filteredGallery = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(item => item.category === activeFilter);

  // Real Calendar Date Calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 - 11
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); 
  const adjustedFirstDayIndex = (firstDayIndex === 0 ? 6 : firstDayIndex - 1);

  const getEventsForDay = (day) => {
    const checkDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    return allMasterEvents.filter(evt => {
      const evtDateObj = new Date(evt.targetDate);
      const evtDateString = `${evtDateObj.getFullYear()}-${String(evtDateObj.getMonth() + 1).padStart(2, '0')}-${String(evtDateObj.getDate()).padStart(2, '0')}`;
      return evtDateString === checkDateString;
    });
  };

  const selectedDayEvents = getEventsForDay(selectedDate);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Update the handler to accept either an ID or a direct URL path
  const handleEventClick = (eventOrPath) => {
    if (typeof eventOrPath === 'number' && eventOrPath === 1) {
      navigate('/events/young-minds-meet'); // Direct route to Young Minds Meet
    } else if (typeof eventOrPath === 'string') {
      navigate(eventOrPath);
    } else {
      navigate(`/events/${eventOrPath}`);
    }
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
          <div className="home-hero-watermark"></div>
        </div>
      </div>

      <div className="home-wrapper">

        {/* DYNAMIC NEAREST FEATURED COUNTDOWN SECTION */}
        {nearestEvent && (
          <section>
            <div 
              className="home-current-event-container countdown-hero-section" 
              onClick={() => handleEventClick(nearestEvent.routePath)}
              style={{ cursor: 'pointer' }}
            >
              <div className="countdown-content-wrapper">
                
                <div className="countdown-badge-pill">
                  <span className="live-pulse-dot"></span> NEAREST UPCOMING EVENT
                </div>
                
                <h2 className="countdown-main-title">{nearestEvent.title}</h2>
                <p className="countdown-sub-desc">Don't miss out on the excitement, participation, and celebrations.</p>
                
                <div className="countdown-meta-flex">
                  <div className="countdown-meta-badge">
                    <CalendarIcon className="w-4 h-4 text-teal-400" />
                    <span>{nearestEvent.dateString}</span>
                  </div>
                  <div className="countdown-meta-badge">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>{nearestEvent.location}</span>
                  </div>
                </div>

                <div className="home-current-tags-grid justify-center">
                  <span className="home-current-pill"><Volleyball className="w-3.5 h-3.5" /> Sports</span>
                  <span className="home-current-pill"><Trophy className="w-3.5 h-3.5" /> Competitions</span>
                  <span className="home-current-pill"><Utensils className="w-3.5 h-3.5" /> Food Stalls</span>
                  <span className="home-current-pill"><Disc className="w-3.5 h-3.5" /> Fun & Quiz</span>
                </div>

                {/* Glowing Countdown Box */}
                <div className="home-large-countdown-wrapper">
                  <div className="countdown-header-row">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="home-countdown-label-top">Countdown to Live the Moment</span>
                  </div>
                  <div className="home-large-countdown-grid">
                    <div className="home-lg-cd-box hover-lift">
                      <span className="home-lg-number">{timeLeft.days}</span>
                      <span className="home-lg-label">Days</span>
                    </div>
                    <div className="home-lg-cd-box hover-lift">
                      <span className="home-lg-number">{timeLeft.hours}</span>
                      <span className="home-lg-label">Hours</span>
                    </div>
                    <div className="home-lg-cd-box hover-lift">
                      <span className="home-lg-number">{timeLeft.minutes}</span>
                      <span className="home-lg-label">Mins</span>
                    </div>
                    <div className="home-lg-cd-box hover-lift">
                      <span className="home-lg-number">{timeLeft.seconds}</span>
                      <span className="home-lg-label">Secs</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="home-current-explore-btn" 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    handleEventClick(nearestEvent.routePath); 
                  }}
                >
                  Explore Event Details <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>

              </div>
            </div>
          </section>
        )}

        {/* WHAT'S NEXT? UPCOMING EVENTS SECTION */}
        {whatsNextEvents.length > 0 && (
          <section className="home-whats-next-section">
            <div className="home-section-header">
              <div>
                <span className="home-whats-next-tag">UPCOMING EVENTS</span>
                <h2 className="home-whats-next-title">What's Next?</h2>
                <p className="home-whats-next-sub">Mark your calendar and be a part of the excitement!</p>
              </div>
              <span className="home-view-all" onClick={() => navigate('/events')}>View All Events &rarr;</span>
            </div>

            <div className="home-whats-next-grid">
              {whatsNextEvents.map((item) => (
                <div key={item.id} className="home-wn-card" onClick={() => handleEventClick(item.routePath)}>
                  <div className="home-wn-img-wrap">
                    <span className="home-wn-badge">UPCOMING</span>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="home-wn-body">
                    <div className="home-wn-date-row">
                      <CalendarIcon className="w-3.5 h-3.5 text-gray-400" /> {item.date}
                    </div>
                    <h4 className="home-wn-card-title">{item.title}</h4>
                    <p className="home-wn-category">{item.category}</p>
                    <p className="home-wn-location"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {item.location}</p>
                    
                    <button className="home-wn-btn">View Details &rarr;</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PAST EVENTS SECTION */}
        <section className="home-whats-next-section">
          <div className="home-section-header">
            <div>
              <span className="home-whats-next-tag" style={{ color: '#219EBC' }}>ARCHIVES</span>
              <h2 className="home-whats-next-title">Past Events</h2>
              <p className="home-whats-next-sub">Relive the unforgettable moments from previous years and concluded events.</p>
            </div>
            <span className="home-view-all" onClick={() => navigate('/gallery')}>View All Memories &rarr;</span>
          </div>

          <div className="home-whats-next-grid">
            {dynamicPastEvents.map((item) => (
              <div key={item.id} className="home-wn-card" onClick={() => navigate('/gallery')}>
                <div className="home-wn-img-wrap">
                  <span className="home-wn-badge" style={{ backgroundColor: 'rgba(33, 158, 188, 0.9)' }}>PAST</span>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="home-wn-body">
                  <div className="home-wn-date-row">
                    <CalendarIcon className="w-3.5 h-3.5 text-gray-400" /> {item.date}
                  </div>
                  <h4 className="home-wn-card-title">{item.title}</h4>
                  <p className="home-wn-category">{item.category}</p>
                  <p className="home-wn-location"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {item.location}</p>
                  
                  <div className="home-wn-countdown-badge" style={{ backgroundColor: 'rgba(33, 158, 188, 0.08)', color: '#219EBC' }}>
                    <Camera className="w-3 h-3" /> Memories Available
                  </div>

                  <button className="home-wn-btn past-btn">Gallery &rarr;</button>
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

      {/* REAL FUNCTIONAL EVENT CALENDAR SECTION */}
      <section className="home-calendar-section">
        <div className="home-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          
          <div className="home-calendar-container">
            
            <div className="home-cal-left">
              <span className="home-moments-tag">EVENT CALENDAR</span>
              <h2 className="home-moments-title">Find Your Date</h2>
              <p className="home-moments-subtitle mb-4">Stay updated with all upcoming and ongoing events.</p>

              <div className="home-cal-legend">
                <div className="home-legend-item">
                  <span className="home-dot ongoing"></span> Scheduled Event
                </div>
                <div className="home-legend-item">
                  <span className="home-dot upcoming"></span> Active Month
                </div>
              </div>
            </div>

            {/* Real Dynamic Calendar Widget */}
            <div className="home-cal-widget">
              <div className="home-cal-header">
                <button className="home-cal-nav-btn" onClick={handlePrevMonth}><ChevronLeft className="w-4 h-4" /></button>
                <span className="home-cal-month-title">{monthName} {year}</span>
                <button className="home-cal-nav-btn" onClick={handleNextMonth}><ChevronRight className="w-4 h-4" /></button>
              </div>

              <div className="home-cal-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="home-cal-day-name">{day}</div>
                ))}

                {/* Blank padding slots for month start alignment */}
                {[...Array(adjustedFirstDayIndex)].map((_, i) => (
                  <div key={`empty-${i}`} className="home-cal-date empty" style={{ opacity: 0.2, cursor: 'default' }}></div>
                ))}

                {/* Actual days of the month */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDate === dayNum;
                  const dayEvents = getEventsForDay(dayNum);
                  const hasEvent = dayEvents.length > 0;

                  return (
                    <div 
                      key={dayNum} 
                      className={`home-cal-date ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedDate(dayNum)}
                    >
                      <span>{dayNum}</span>
                      {hasEvent && (
                        <span className="home-cal-dot ongoing"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Date Events List */}
            <div className="home-cal-events-list">
              <h4 className="home-cal-list-title">Events on {selectedDate} {monthName} {year}</h4>
              
              <div className="home-cal-items-wrap">
                {selectedDayEvents.length > 0 ? (
                  selectedDayEvents.map((evt, idx) => (
                    <div key={idx} className="home-cal-event-card" onClick={() => handleEventClick(evt.routePath)}>
                      <div className="home-cal-event-info">
                        <span className="home-dot ongoing" style={{ display: 'inline-block', marginRight: '6px', marginTop: '4px' }}></span>
                        <div>
                          <strong>{evt.title}</strong>
                          <small>{evt.location} • {evt.category}</small>
                        </div>
                      </div>
                      <span className="home-cal-arrow">&rsaquo;</span>
                    </div>
                  ))
                ) : (
                  <p style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center', margin: 'auto 0' }}>
                    No events scheduled for this date.
                  </p>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}