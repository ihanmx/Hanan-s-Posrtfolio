import React, { useState } from "react";
import "./qualification.css";

const qualifications = {
  education: [
    {
      title: "Bachelor's degree in Software Engineering",
      subtitle: "Prince Sattam bin Abdulaziz University — GPA: 4.94/5",
      date: "2021 – 2025",
    },
    {
      title: "Graduated from 123 Highschool",
      subtitle: "GPA: 99.92",
      date: "2020 – 2021",
    },
  ],
  experience: [
    {
      title: "Full-Stack Developer Internship",
      subtitle:
        "PERN Stack (PostgreSQL, Express.js, React.js, Node.js, APIs, mailing & payment services)",
      date: "Sep 2025 – Present",
    },
    {
      title: "IT Internship — Eradah Hospital",
      subtitle: "UI/UX, Data Analysis, Technical Support",
      date: "Jan 2025 – Mar 2025",
    },
    {
      title: "Graduation Project",
      subtitle: "Developed EnviAI full-stack web application",
      date: "2024",
    },
  ],
};

const Qualification = () => {
  const [tab, setTab] = useState("education");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      {/* Tabs */}
      <div className="qualification__tabs">
        <button
          className={`qualification__tab ${
            tab === "education" ? "active" : ""
          }`}
          onClick={() => setTab("education")}
        >
          <i className="uil uil-graduation-cap"></i> Education
        </button>
        <button
          className={`qualification__tab ${
            tab === "experience" ? "active" : ""
          }`}
          onClick={() => setTab("experience")}
        >
          <i className="uil uil-briefcase-alt"></i> Experience
        </button>
      </div>

      {/* Timeline */}
      <div className="qualification__timeline">
        {qualifications[tab].map((item, index) => (
          <div
            key={index}
            className={`qualification__data ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="qualification__content">
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {item.date}
              </div>
            </div>
            <div className="qualification__line-wrapper">
              <span className="qualification__rounder"></span>
              {index !== qualifications[tab].length - 1 && (
                <span className="qualification__line"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
