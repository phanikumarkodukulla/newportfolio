import React from "react";
import BackButton from "../components/BackButton";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PyVoiceCraft",
      description: "An AI-powered voice synthesis and processing library",
      tech: ["Python", "AI", "Audio Processing"],
      image: "/pyvoicecraft-logo.png",
      link: "#",
    },
    {
      id: 2,
      title: "Web Scraping Tool",
      description: "Efficient web scraping tool for data extraction",
      tech: ["Python", "Selenium", "BeautifulSoup"],
      image: "/webscrap.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "React Clone",
      description: "A simplified clone of React framework",
      tech: ["React", "JavaScript", "Frontend"],
      image: "/reactclone.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      tech: ["React", "Vite", "CSS"],
      image: "/web.jpg",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <BackButton />

      <div className="animated-bg">
        <div className="animated-bg-inner"></div>
      </div>

      <div className="projects-container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Showcasing my work and technical expertise
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
