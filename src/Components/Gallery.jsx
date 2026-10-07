import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import { Camera, Video, Play, Filter, Sparkles } from 'lucide-react';

// Import local assets
import culturalFestImg from '../assets/cultural.jpg';
import culturalFest2 from '../assets/memory1.jpg';
import culturalFest3 from '../assets/memory2.jpg';
import annualFestImg from '../assets/annual.jpg';
import freshersImg from '../assets/freshers.jpg';
import sportsImg from '../assets/sports.jpg';
import memory1 from '../assets/memory1.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';
import memory4 from '../assets/memory4.jpg';
import memory5 from '../assets/memory5.jpg';

export default function Gallery() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('All');

  // Photos configured with taller vertical and varied spans
  const allPhotos = [
    { id: 1, img: culturalFestImg, title: 'Cultural Fest 2026', category: 'Cultural', span: 'vertical-tall' },
    { id: 2, img: culturalFest2, title: 'Cultural Fest 2026', category: 'Cultural', span: 'normal' },
    { id: 3, img: culturalFest3, title: 'Cultural Fest 2026', category: 'Cultural', span: 'vertical-tall' },
    { id: 4, img: memory1, title: 'Cultural Fest 2026', category: 'Cultural', span: 'normal' },
    { id: 5, img: memory2, title: 'Technova 2026', category: 'Tech', span: 'vertical-tall' },
    { id: 6, img: memory3, title: 'Technova 2026', category: 'Tech', span: 'normal' },
    { id: 7, img: memory4, title: 'Technova 2026', category: 'Tech', span: 'vertical-tall' },
    { id: 8, img: sportsImg, title: 'Sports Meet 2025', category: 'Sports', span: 'vertical-tall' },
    { id: 9, img: memory5, title: 'Sports Meet 2025', category: 'Sports', span: 'normal' },
    { id: 10, img: freshersImg, title: 'Freshers Party 2025', category: 'Campus Life', span: 'vertical-tall' }
  ];

  // Video Highlights Data
  const eventVideos = [
    {
      id: 1,
      title: "Cultural Fest 2026 - Grand Opening & Flashmob",
      duration: "3:45",
      category: "Cultural",
      thumbnail: culturalFestImg,
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Technova 2026 - Hackathon Highlights & Robotics",
      duration: "4:20",
      category: "Tech",
      thumbnail: memory2,
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Sports Meet 2025 - Basketball Finals & Relay",
      duration: "5:10",
      category: "Sports",
      thumbnail: sportsImg,
      videoUrl: "#"
    }
  ];

  const categories = ['All', 'Cultural', 'Tech', 'Sports', 'Campus Life'];

  const filteredPhotos = activeFilter === 'All' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === activeFilter);

  const filteredVideos = activeFilter === 'All' 
    ? eventVideos 
    : eventVideos.filter(vid => vid.category === activeFilter);

  return (
    <div className="gallery-container fade-in-page">
      
      {/* Hero Header */}
      <div className="gallery-hero">
        <div className="gallery-hero-badge"><Camera className="w-4 h-4" /> Media Archives</div>
        <h1 className="gallery-hero-title">Moments & Video Highlights</h1>
        <p className="gallery-hero-desc">
          Browse through our modern vertical photo wall and watch recap videos of past and ongoing campus celebrations.
        </p>

        {/* Filter Pills */}
        <div className="gallery-global-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">

        {/* 1. VERTICAL MASONRY PHOTO WALL SECTION */}
        <section>
          <div className="gallery-section-heading-wrap">
            <span className="gallery-sub-tag">PHOTO WALL</span>
            <h2 className="gallery-section-main-title">Captured Memories</h2>
          </div>

          <div className="gallery-asymmetric-grid">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className={`gallery-async-card ${photo.span} hover-lift`}>
                <div className="gallery-async-img-wrap">
                  <img src={photo.img} alt={photo.title} />
                  <div className="gallery-async-overlay">
                    <span className="gallery-async-badge">{photo.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. VIDEO HIGHLIGHTS SECTION */}
        <section className="gallery-video-section">
          <div className="gallery-section-heading-wrap">
            <span className="gallery-sub-tag" style={{ color: '#FF9966' }}>RECAP REELS</span>
            <h2 className="gallery-section-main-title">Event Video Highlights</h2>
          </div>

          <div className="gallery-videos-grid">
            {filteredVideos.map((vid) => (
              <div key={vid.id} className="gallery-video-card hover-lift" onClick={() => alert("Playing video stream...")}>
                <div className="gallery-video-thumb-wrap">
                  <img src={vid.thumbnail} alt={vid.title} />
                  <div className="gallery-video-play-overlay">
                    <div className="play-icon-circle">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <span className="gallery-video-duration">{vid.duration}</span>
                </div>
                <div className="gallery-video-body">
                  <span className="gallery-video-cat">{vid.category}</span>
                  <h4 className="gallery-video-title">{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}