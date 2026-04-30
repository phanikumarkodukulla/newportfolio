import React from "react";
import BackButton from "../components/BackButton";
import "../styles/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "MongoDB", "SQL", "Node.js"],
    },
    {
      category: "Data Science",
      skills: ["Pandas", "Python", "Machine Learning", "Data Analysis", "LLM"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Docker", "APIs", "Web Scraping"],
    },
  ];

  return (
    <div className="skills-page">
      <BackButton />

      <div className="animated-bg">
        <div className="animated-bg-inner"></div>
      </div>

      <div className="skills-container">
        <div className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">
            Technical skills and technologies I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
