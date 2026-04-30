import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(false);

  const text = "Welcome to Phani Kumar Portfolio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(timer);
        setLoading(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">Phani Kumar Portfolio</div>
        </div>

        <div className="terminal-body">
          <div className="terminal-content">
            <div className="prompt">$ </div>
            <div className="typewriter">
              {displayedText}
              {displayedText.length < text.length && (
                <span className="cursor"></span>
              )}
            </div>

            {loading && (
              <div className="navigation-menu">
                <nav className="menu-items">
                  <button
                    onClick={() => navigate("/certifications")}
                    className="menu-link"
                  >
                    📜 Certifications
                  </button>
                  <button
                    onClick={() => navigate("/educations")}
                    className="menu-link"
                  >
                    🎓 Educations
                  </button>
                  <button
                    onClick={() => navigate("/projects")}
                    className="menu-link"
                  >
                    💻 Projects
                  </button>
                  <button
                    onClick={() => navigate("/publications")}
                    className="menu-link"
                  >
                    📚 Publications
                  </button>
                  <button
                    onClick={() => navigate("/skills")}
                    className="menu-link"
                  >
                    ⚙️ Skills
                  </button>
                </nav>

                <div className="social-links">
                  <h3>Connect With Me</h3>
                  <div className="social-icons">
                    <a
                      href="https://gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      📧 Gmail
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      💼 LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      🐙 GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
