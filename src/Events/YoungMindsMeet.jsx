import React from 'react';
import "./YoungMindsMeet.css";

// Import your campus background hero image (adjust path if needed)
import campusBgImg from '../assets/young-bg.jpeg';

const quizLink = "https://docs.google.com/forms/d/13jBk8ibV9L8Idz8IST0F8BhXO0xul_C97ULi21mlWuc/edit?ts=6a1abf91";

const activities = [
  {
    number: "01",
    icon: "🏆",
    title: "Sports Competition",
    description:
      "Show your team spirit, enjoy exciting sports activities and make memorable moments with your friends.",
    type: "sports",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Fun Games",
    description:
      "Take part in fun-filled games that encourage teamwork, interaction and friendly competition.",
    type: "games",
  },
  {
    number: "03",
    icon: "💡",
    title: "Quiz Competition",
    description:
      "Challenge your knowledge, think quickly and participate in our exciting online quiz competition.",
    type: "quiz",
  },
];

const schedule = [
  {
    time: "09:00 AM",
    title: "Welcome & Registration",
    description:
      "Welcome address and registration of participating students.",
  },
  {
    time: "10:00 AM",
    title: "Sports & Games",
    description:
      "Enjoy sports activities and interactive games with fellow students.",
  },
  {
    time: "12:00 PM",
    title: "Quiz Competition",
    description:
      "Participate in the online quiz competition.",
  },
  {
    time: "03:00 PM",
    title: "Closing Ceremony",
    description:
      "Wrap up the day with memorable moments and a closing ceremony.",
  },
];

const guidelines = [
  "Please arrive at the venue on time.",
  "Maintain discipline and sportsmanship throughout the event.",
  "Follow the instructions given by event coordinators.",
  "Bring any required stationery and personal essentials.",
];

function YoungMindsMeet() {
  return (
    <main className="ym-page">

      {/* HERO SECTION WITH CAMPUS BACKGROUND & FADE EFFECT */}
      <section className="ym-hero">
        <div className="ym-hero-overlay" />
        <img src={campusBgImg} alt="Study Hall College Campus" className="ym-hero-bg" />

        <div className="ym-hero-inner">
          <div className="ym-hero-content">
            <span className="ym-eyebrow">
              ✦ COLLEGE EVENTS
            </span>

            <h1>
              Young Minds
              <br />
              <span>Meets</span>
            </h1>

            <p className="ym-hero-tagline">
              Explore. Play. Learn. Connect.
            </p>

            <p className="ym-hero-description">
              A special day of sports, fun games and an
              exciting quiz competition. Come together,
              participate and create memories that last.
            </p>

            <div className="ym-hero-actions">
              <a href="#ym-activities" className="ym-btn ym-btn-primary">
                Explore Activities <span>→</span>
              </a>

              <a href="#ym-schedule" className="ym-btn ym-btn-outline">
                View Schedule
              </a>
            </div>
          </div>

          <span className="ym-hero-decoration ym-decoration-one" />
          <span className="ym-hero-decoration ym-decoration-two" />
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="ym-info-wrap" aria-label="Event details">
        <div className="ym-info-strip">
          <div className="ym-info-item">
            <span className="ym-info-icon">📅</span>
            <div>
              <span className="ym-info-label">DATE</span>
              <strong>14 October 2026</strong>
            </div>
          </div>

          <div className="ym-info-item">
            <span className="ym-info-icon">⏰</span>
            <div>
              <span className="ym-info-label">TIME</span>
              <strong>09:00 AM – 04:00 PM</strong>
            </div>
          </div>

          <div className="ym-info-item">
            <span className="ym-info-icon">📍</span>
            <div>
              <span className="ym-info-label">VENUE</span>
              <strong>Study Hall College</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="ym-section ym-about">
        <div className="ym-about-content">
          <span className="ym-section-label">ABOUT THE EVENT</span>

          <h2>
            Where Young Minds
            <br />
            <span>Come Together.</span>
          </h2>

          <p>
            Study Hall College welcomes Class 11 students from
            Study Hall School for a day full of energy,
            creativity, friendly competition and learning.
          </p>

          <p>
            Young Minds Meets is an opportunity to connect
            with others, discover new interests, enjoy games
            and take part in an exciting quiz competition.
          </p>

          <a href="#ym-activities" className="ym-text-link">
            Discover the activities <span>→</span>
          </a>
        </div>

        <div className="ym-about-card">
          <div className="ym-about-card-top">
            <span className="ym-about-card-icon">✦</span>
            <span className="ym-about-card-number">01 / ONE DAY</span>
          </div>

          <h3>A Day Full of Experiences</h3>

          <p>
            Great activities, new connections and memories
            to take back with you.
          </p>

          <div className="ym-about-tags">
            <span>Learn</span>
            <span>Play</span>
            <span>Connect</span>
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section
        id="ym-activities"
        className="ym-section ym-activities"
      >
        <div className="ym-section-heading">
          <span className="ym-section-label">WHAT'S HAPPENING</span>
          <h2>
            Activities & <span>Competitions</span>
          </h2>
          <p>
            Find your favourite activity and get ready
            to participate.
          </p>
        </div>

        <div className="ym-activity-grid">
          {activities.map((activity) => (
            <article
              className={`ym-activity-card ym-card-${activity.type}`}
              key={activity.type}
            >
              <div className="ym-card-top">
                <div className="ym-card-icon" aria-hidden="true">
                  {activity.icon}
                </div>

                <span className="ym-card-number">
                  {activity.number}
                </span>
              </div>

              <h3>{activity.title}</h3>

              <p>{activity.description}</p>

              {activity.type === "quiz" ? (
                <a
                  className="ym-card-link"
                  href={quizLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Participate in Quiz <span>↗</span>
                </a>
              ) : (
                <div className="ym-card-note">
                  <span>✦</span> Get ready to participate
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section
        id="ym-schedule"
        className="ym-section ym-schedule"
      >
        <div className="ym-section-heading">
          <span className="ym-section-label">PLAN YOUR DAY</span>
          <h2>
            Event <span>Schedule</span>
          </h2>
          <p>
            Here's the planned flow of the day.
          </p>
        </div>

        <div className="ym-timeline">
          {schedule.map((item, index) => (
            <div className="ym-timeline-item" key={item.time}>
              <div className="ym-timeline-time">
                {item.time}
              </div>

              <div className="ym-timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="ym-timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDELINES SECTION */}
      <section className="ym-section ym-guidelines">
        <div className="ym-guidelines-box">
          <div className="ym-section-heading">
            <span className="ym-section-label">
              BEFORE YOU ARRIVE
            </span>
            <h2>
              A Few <span>Things to Know</span>
            </h2>
            <p>
              Keep these simple guidelines in mind
              to make the event enjoyable for everyone.
            </p>
          </div>

          <div className="ym-guidelines-grid">
            {guidelines.map((guideline, index) => (
              <div className="ym-guideline" key={guideline}>
                <span className="ym-guideline-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{guideline}</p>

                <span className="ym-guideline-check">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ CALL TO ACTION */}
      <section className="ym-section ym-quiz-section">
        <div className="ym-quiz-cta">
          <div className="ym-quiz-cta-icon" aria-hidden="true">
            💡
          </div>

          <div className="ym-quiz-cta-content">
            <span className="ym-section-label">
              ONLINE QUIZ COMPETITION
            </span>

            <h2>Ready to test your knowledge?</h2>

            <p>
              Think fast, trust your knowledge and take part
              in the online quiz competition.
            </p>
          </div>

          <a
            href={quizLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ym-btn ym-btn-primary ym-quiz-button"
          >
            Open Quiz <span>↗</span>
          </a>
        </div>
      </section>

      {/* SECTION FOOTER */}
      <footer className="ym-footer">
        <div className="ym-footer-main">
          <div className="ym-footer-brand">
            <span className="ym-footer-symbol">✦</span>
            <div>
              <strong>Young Minds Meets</strong>
              <p>Study Hall College · 14 October 2026</p>
            </div>
          </div>

          <div className="ym-footer-links">
            <a href="#ym-activities">Activities</a>
            <a href="#ym-schedule">Schedule</a>
            <a href="#ym-top" onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default YoungMindsMeet;