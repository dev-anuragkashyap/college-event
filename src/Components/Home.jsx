import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Camera, Sparkles, Music, Trophy, Utensils, Disc, ChevronLeft, ChevronRight, Volleyball } from 'lucide-react';

// Import your local assets from the assets folder
import heroBgImg from '../assets/hero-bg.jpeg';
import dandiyaImg from '../assets/dandiya.jpg';
import culturalFestImg from '../assets/cultural.jpg';
import culturalFest2 from '../assets/memory1.jpg';
import culturalFest3 from '../assets/memory2.jpg';
import technovaImg from '../assets/annual.jpg';
import sportsMeetImg from '../assets/sports.jpg';
import openMicImg from '../assets/memory2.jpg';
import freshersImg from '../assets/freshers.jpg';

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
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 2, minutes: 51, seconds: 12 });

  // Gallery Category Filter State
  const [activeFilter, setActiveFilter] = useState('All');

  // Calendar State (Defaulting to October 2026)
  const [selectedDate, setSelectedDate] = useState(7);

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

  const whatsNextEvents = [
    { 
      id: 1, 
      title: "TECHNOVA 2026", 
      category: "Technical Fest", 
      date: "16 Oct 2026", 
      location: "Auditorium & Labs", 
      countdown: "Starts in 12 Days", 
      img: technovaImg 
    },
    { 
      id: 2, 
      title: "SPORTS MEET", 
      category: "Sports Championship", 
      date: "25 Oct 2026", 
      location: "College Ground", 
      countdown: "Starts in 17 Days", 
      img: sportsMeetImg 
    },
    { 
      id: 3, 
      title: "OPEN MIC NIGHT", 
      category: "Literary & Arts", 
      date: "02 Nov 2026", 
      location: "Seminar Hall", 
      countdown: "Starts in 27 Days", 
      img: openMicImg 
    },
    { 
      id: 4, 
      title: "FRESHERS PARTY", 
      category: "Welcome Event", 
      date: "12 Nov 2026", 
      location: "College Ground", 
      countdown: "Starts in 37 Days", 
      img: freshersImg 
    }
  ];

  const pastEvents = [
    { 
      id: 101, 
      title: "FRESHER'S PARTY 2025", 
      category: "Welcome Event", 
      date: "16 Aug 2025", 
      location: "College Ground", 
      tag: "PAST EVENT", 
      img: pastFreshersImg 
    },
    { 
      id: 102, 
      title: "SPORTS DAY 2025", 
      category: "Sports Championship", 
      date: "20 Mar 2025", 
      location: "Sports Ground", 
      tag: "PAST EVENT", 
      img: pastSportsImg 
    },
    { 
      id: 103, 
      title: "ANNUAL FEST 2025", 
      category: "Cultural Fest", 
      date: "10 Dec 2025", 
      location: "Auditorium", 
      tag: "PAST EVENT", 
      img: pastAnnualImg 
    },
    { 
      id: 104, 
      title: "CULTURAL NIGHT 2025", 
      category: "Music & Dance", 
      date: "01 Nov 2025", 
      location: "College Ground", 
      tag: "PAST EVENT", 
      img: pastCulturalImg 
    }
  ];

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

  const calendarEventsMap = {
    7: [
      { title: "Cultural Fest 2026", location: "Main Ground • 12:00 AM", type: "ongoing" },
      { title: "Photography Workshop", location: "Seminar Hall • 2:00 PM", type: "upcoming" },
      { title: "Basketball Match", location: "Sports Complex • 4:00 PM", type: "past" }
    ],
    16: [
      { title: "TECHNOVA 2026", location: "Auditorium & Labs • 10:00 AM", type: "upcoming" }
    ],
    25: [
      { title: "SPORTS MEET", location: "College Ground • 9:00 AM", type: "upcoming" }
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
          <div className="home-hero-watermark"></div>
        </div>
      </div>
      <div className="home-wrapper">

       <section>
          <div className="home-current-event-container" onClick={() => handleEventClick(999)}>
            <div className="home-current-left">
              <div className="home-current-tag">UPCOMING EVENT</div>
              <h2 className="home-current-title">Campas Visit 2026</h2>
              <p className="home-current-subtitle">Joyful days of Sports,learning, drama, creativity and celebration.</p>
              
              <div className="home-current-meta-row">
                <div className="home-current-meta-item">
                  <CalendarIcon className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>One Day</strong>
                    <span>Be raedy on 14 October</span>
                  </div>
                </div>
                <div className="home-current-meta-item">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>Main Campus</strong>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="home-current-tags-grid">
                <span className="home-current-pill"><Volleyball className="w-3.5 h-3.5" /> Sports</span>
                <span className="home-current-pill"><Trophy className="w-3.5 h-3.5" /> Competitions</span>
                <span className="home-current-pill"><Utensils className="w-3.5 h-3.5" /> Food </span>
                <span className="home-current-pill"><Disc className="w-3.5 h-3.5" /> Quiz</span>
              </div>

              <div className="home-large-countdown-wrapper">
                <span className="home-countdown-label-top">Countdown to live the moment</span>
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
                Explore Event &rarr;
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
              <div className="home-current-tag">UPCOMING EVENT</div>
              <h2 className="home-current-title">Dandiya Night 2026</h2>
              <p className="home-current-subtitle">Joyful days of music, dance, drama, creativity and celebration.</p>
              
              <div className="home-current-meta-row">
                <div className="home-current-meta-item">
                  <CalendarIcon className="w-4 h-4 text-teal-600" />
                  <div>
                    <strong>One Day</strong>
                    <span>Be raedy on 16 October</span>
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
                <span className="home-countdown-label-top">Countdown to Grand Finale</span>
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
                Explore Event &rarr;
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

        {/* WHAT'S NEXT? UPCOMING EVENTS SECTION */}
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
              <div key={item.id} className="home-wn-card" onClick={() => handleEventClick(item.id)}>
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
                  
                  <div className="home-wn-countdown-badge">
                    <Clock className="w-3 h-3 text-rose-500" /> {item.countdown}
                  </div>

                  <button className="home-wn-btn">View Details &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAST EVENTS SECTION (Matched to 4-Column Card Layout) */}
        <section className="home-whats-next-section">
          <div className="home-section-header">
            <div>
              <span className="home-whats-next-tag" style={{ color: '#219EBC' }}>ARCHIVES</span>
              <h2 className="home-whats-next-title">Past Events</h2>
              <p className="home-whats-next-sub">Relive the unforgettable moments from previous years.</p>
            </div>
            <span className="home-view-all" onClick={() => navigate('/gallery')}>View All Memories &rarr;</span>
          </div>

          <div className="home-whats-next-grid">
            {pastEvents.map((item) => (
              <div key={item.id} className="home-wn-card" onClick={() => handleEventClick(item.id)}>
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

      {/* EVENT CALENDAR SECTION ("Find Your Date") */}
      <section className="home-calendar-section">
        <div className="home-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          
          <div className="home-calendar-container">
            
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

                {[...Array(31)].map((_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDate === dayNum;
                  const hasEvent = [2, 7, 16, 25, 28].includes(dayNum);
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