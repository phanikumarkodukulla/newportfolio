import React from "react";
import BackButton from "../components/BackButton";
import "../styles/educations.css";

const Educations = () => {
  const educations = [
    {
      id: 1,
      institution: "Shiv Nadar University",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      year: "2022 - Present",
      image: "/lu.jpeg",
    },
    {
      id: 2,
      institution: "Delhi Public School",
      degree: "Senior Secondary (XII)",
      field: "Science Stream",
      year: "2018 - 2020",
      image: "/school.jpeg",
    },
  ];

  return (
    <div className="educations-page">
      <BackButton />

      <div className="animated-bg">
        <div className="animated-bg-inner"></div>
      </div>

      <div className="educations-container">
        <div className="page-header">
          <h1 className="page-title">Education</h1>
          <p className="page-subtitle">My academic journey and achievements</p>
        </div>

        <div className="timeline">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-marker"></div>
              <div className="education-card">
                {edu.image && (
                  <div className="edu-image-wrapper">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="edu-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="edu-content">
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-field">{edu.field}</p>
                  <span className="edu-year">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
