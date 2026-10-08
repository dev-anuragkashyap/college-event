import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { Award, Users, Target, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

// Import local assets from the assets folder
import aboutHeroImg from '../assets/contact-hero.jpeg';
import campusTeamImg from '../assets/cultural.jpg';
import workshopImg from '../assets/memory1.jpg';

export default function About() {
  const navigate = useNavigate();

  const stats = [
    { label: "Annual Events", value: "25+" },
    { label: "Active Students", value: "3,500+" },
    { label: "Campus Clubs", value: "15+" },
    { label: "Memories Captured", value: "10k+" }
  ];

  const coreValues = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Vibrant Culture",
      desc: "Encouraging creativity, artistic expression, and unforgettable cultural celebrations across campus."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Inclusivity & Community",
      desc: "Bringing together students from diverse backgrounds to collaborate, network, and grow together."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excellence & Growth",
      desc: "Providing platforms for students to showcase their leadership, technical, and extracurricular talents."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Safe & Engaging",
      desc: "Ensuring well-organized, secure, and seamlessly coordinated events for the entire student body."
    }
  ];

  return (
    <div className="about-container fade-in-page">
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay" />
        <img 
          src={aboutHeroImg} 
          alt="Campus Community" 
          className="about-hero-image"
        />
        <div className="about-hero-content">
          <span className="about-badge">About CampusEvents</span>
          <h1 className="about-title">
            Empowering Student Life & <br />
            <span>Unforgettable Experiences</span>
          </h1>
          <p className="about-desc">
            CampusEvents is the official hub for all college fests, cultural nights, tech workshops, and sports championships. We bridge the gap between planning and participation.
          </p>
        </div>
      </div>

      <div className="about-wrapper">
        
        {/* Mission & Vision Split Section */}
        <section className="about-mission-section">
          <div className="about-mission-text">
            <div className="about-tag">
              <Target className="w-4 h-4 text-teal-600" /> OUR MISSION & VISION
            </div>
            <h2 className="about-section-heading">Creating Moments That Last a Lifetime</h2>
            <p className="about-text-lead">
              College life is more than just lectures and exams; it is about discovering who you are through experiences, connections, and celebrations.
            </p>
            <p className="about-text-body">
              Our platform ensures that no student ever misses out on an opportunity to participate, lead, or cherish campus milestones. From the grand stage of the Annual Fest to the collaborative buzz of hackathons, we keep the campus pulse alive.
            </p>
            <button className="about-primary-btn" onClick={() => navigate('/events')}>
              Explore Events <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="about-mission-img-grid">
            <div className="about-img-box">
              <img src={campusTeamImg} alt="Campus Team" />
            </div>
            <div className="about-img-box">
              <img src={workshopImg} alt="Student Workshop" />
            </div>
          </div>
        </section>

        {/* Stats Banner Section */}
        <section className="about-stats-section">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Core Values Section */}
        <section className="about-values-section">
          <div className="about-center-header">
            <div className="about-tag justify-center">
              <Award className="w-4 h-4 text-teal-600" /> WHAT DRIVES US
            </div>
            <h2 className="about-section-heading">Our Core Values</h2>
            <p className="about-section-sub">Built by students, for students—fostering collaboration and passion.</p>
          </div>

          <div className="about-values-grid">
            {coreValues.map((item, idx) => (
              <div key={idx} className="about-value-card hover-lift">
                <div className="about-value-icon">{item.icon}</div>
                <h4 className="about-value-title">{item.title}</h4>
                <p className="about-value-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="about-cta-banner">
          <h2>Ready to Join the Next Big Event?</h2>
          <p>Explore upcoming fests, check out past memories, or register your participation today.</p>
          <div className="about-cta-buttons">
            <button className="about-cta-primary-btn" onClick={() => navigate('/events')}>
              Explore Events <ArrowRight className="w-4 h-4" />
            </button>
            <button className="about-cta-outline-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}