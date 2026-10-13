import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/Events.css';
import eventsBanner from '../assets/Banner.png';
import DandiyaImg from '../assets/DandiyaImage.jpg';
import YoungImg from '../assets/Young.jpg';
import FresherImg from '../assets/FresherImage.jpeg';
import SportsImg from '../assets/SportsDay.jpeg';
import SpardhaImg from '../assets/Spardha.jpeg';
import HackathonImg from '../assets/Hackathon.jpg';
import OpenImg from '../assets/open-house.png';
import CookingImg from '../assets/Cooking.jpeg';
import OreintationImg from '../assets/Orientation.jpg';

const upcomingEvents = [
  {
    id: "dandiya-night",
    title: "Dandiya Night 2026",
    date: "15 October 2026",
    location: "College Ground",
    image: DandiyaImg,
    category: "Cultural",
    routePath: "/events/dandiya"
  },
  {
    id: "Young-Minds-Meet",
    title: "Young Minds Meet 2026",
    date: "20 November 2026",
    location: "College Campus",
    image: YoungImg,
    category: "Academic",
  },
  {
    id: "hackathon-2026",
    title: "Hackathon 2026",
    date: "10 November 2026",
    location: "College Campus",
    image: HackathonImg,
    category: "Party",
  },
  {
    id: "spardha-2027",
    title: "Spardha 2027",
    date: "10 February 2027",
    location: "Sports Ground",
    image: SpardhaImg,
    category: "Sports",
  },
];

const pastEvents = [
  {
    id: "sports-day-2026",
    title: "Sports Day 2026",
    date: "29 August 2026",
    location: "Sports Ground",
    image: SportsImg,
    category: "Sports",
  },
  {
    id: "freshers-party-2026",
    title: "Freshers Party 2026",
    date: "03 October 2026",
    location: "College Auditorium",
    image: FresherImg,
    category: "Party",
  },
  {
    id: "open-house-2026",
    title: "Open House 2026",
    date: "19 October 2026",
    location: "College Campus",
    image: OpenImg,
    category: "Festival",
  },
  {
    id: "cooking-competition-2026",
    title: "Cooking Without Fire 2026",
    date: "03 September 2026",
    location: "College Cafeteria",
    image: CookingImg,
    category: "Cultural",
  },
  {
    id: "orientation-2026",
    title: "Orientation 2026",
    date: "27 September 2026",
    location: "Activity Hall ",
    image: OreintationImg,
    category: "Cultural",
  },
];

function EventCard({ event, past }) {
  return (
    <article className="event-card">
      <div className="event-card-image">
        <img src={event.image} alt={event.title} />

        <span
          className={`event-badge ${
            past ? "badge-past" : "badge-upcoming"
          }`}
        >
          {past ? "COMPLETED" : "UPCOMING"}
        </span>
      </div>

      <div className="event-card-content">
        <span className="event-category">
          {event.category}
        </span>

        <h3>{event.title}</h3>

        <div className="event-info">
          <p>
            <span aria-hidden="true">📅</span>
            {event.date}
          </p>

          <p>
            <span aria-hidden="true">📍</span>
            {event.location}
          </p>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="event-view-btn"
        >
          {past ? "View Memories" : "View Event"}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}

function Event() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="events-page">

      {/* HERO SECTION */}
      <section
  className="events-hero"
  style={{ backgroundImage: `url(${eventsBanner})` }}
>
  <div className="events-hero-overlay"></div>

  <div className="events-hero-content">
    <span className="events-eyebrow">
      CELEBRATE • PARTICIPATE • REMEMBER
    </span>

    <h1>Discover Our Events</h1>

    <p>
      Explore exciting college celebrations,
      unforgettable moments and upcoming experiences.
    </p>

    <a href="#upcoming-events" className="hero-explore-btn">
      Explore Events <span>↓</span>
    </a>
  </div>
</section>

      {/* FILTER BUTTONS */}
      <section className="events-filter-section">
        <div className="events-filter">
          <button
            type="button"
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All Events
          </button>

          <button
            type="button"
            className={filter === "upcoming" ? "selected" : ""}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming Events
          </button>

          <button
            type="button"
            className={filter === "past" ? "selected" : ""}
            onClick={() => setFilter("past")}
          >
            Past Events
          </button>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      {(filter === "all" || filter === "upcoming") && (
        <section
          id="upcoming-events"
          className="events-section"
        >
          <div className="events-container">

            <div className="events-section-heading">
              <div>
                <span className="events-section-label">
                  WHAT'S COMING NEXT
                </span>

                <h2>Upcoming Events</h2>

                <p>
                  Be a part of the celebrations coming your way.
                </p>
              </div>
            </div>

            <div className="events-grid">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  past={false}
                />
              ))}
            </div>

          </div>
        </section>
      )}

      {/* PAST EVENTS */}
      {(filter === "all" || filter === "past") && (
        <section className="events-section past-events-section">
          <div className="events-container">

            <div className="events-section-heading">
              <div>
                <span className="events-section-label">
                  MEMORIES FROM THE PAST
                </span>

                <h2>Past Events</h2>

                <p>
                  Relive the moments that made our campus special.
                </p>
              </div>
            </div>

            <div className="events-grid">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  past={true}
                />
              ))}
            </div>

          </div>
        </section>
      )}

    </main>
  );
}

export default Event;