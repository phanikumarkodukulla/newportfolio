import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import resumePDF from "./resume.pdf";

export default function Home() {
  const { isDark } = useTheme();
  const [displayText, setDisplayText] = React.useState("");
  const fullText =
    "I'm a passionate software developer with a knack for crafting elegant solutions. With experience in full-stack development and machine learning, I thrive on turning complex problems into seamless digital experiences. Let's build something amazing together!";

  React.useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

        .portfolio-wrapper *, .portfolio-wrapper *::before, .portfolio-wrapper *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --color-primary: #2563EB;
          --color-secondary: #6366F1;
          --color-accent: #3B82F6;
          --color-darker-bg: ${isDark ? "#000000" : "#F9FAFB"};
          --color-card-bg: ${isDark ? "rgba(9, 14, 23, 0.85)" : "rgba(255, 255, 255, 0.85)"};
          --color-card-border: ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
          --color-light-text: ${isDark ? "#F8FAFC" : "#1A202C"};
          --font-display: "Space Grotesk", sans-serif;
          --font-mono: "JetBrains Mono", monospace;
          --font-body: "Inter", sans-serif;

          /* Fluid type scale using clamp */
          --fs-greeting:  clamp(0.7rem,  1.5vw, 1rem);
          --fs-name:      clamp(2rem,    6vw,  4.2rem);
          --fs-roles:     clamp(0.75rem, 1.8vw, 1.15rem);
          --fs-desc:      clamp(0.8rem,  1.5vw, 1rem);
          --fs-btn:       clamp(0.8rem,  1.3vw, 0.95rem);
          --fs-title:     clamp(0.7rem,  1.2vw, 0.85rem);

          /* Fluid spacing */
          --pad-body-x:   clamp(20px, 6vw, 100px);
          --pad-body-y:   clamp(24px, 5vh, 80px);
          --gap-section:  clamp(10px, 2.5vh, 30px);
          --gap-btn:      clamp(10px, 1.5vw, 20px);
          --btn-pad-x:    clamp(14px, 2vw, 28px);
          --btn-pad-y:    clamp(10px, 1.2vh, 14px);
        }

        .portfolio-wrapper {
          width: 100%;
          height: 100vh;
          background-color: var(--color-darker-bg);
          color: var(--color-light-text);
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden !important;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .bg-glow {
          position: absolute;
          width: min(900px, 90vw);
          height: min(900px, 90vw);
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
          top: -20%;
          left: -10%;
          filter: blur(100px);
          animation: float 10s infinite alternate;
          pointer-events: none;
        }

        .bg-glow-secondary {
          position: absolute;
          width: min(700px, 80vw);
          height: min(700px, 80vw);
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%);
          bottom: -20%;
          right: -10%;
          filter: blur(100px);
          animation: float 12s infinite alternate-reverse;
          pointer-events: none;
        }

        @keyframes float {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        .terminal-card {
          width: clamp(300px, 96vw, 1400px);
          height: clamp(300px, 90vh, 950px);
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: clamp(8px, 1.5vw, 16px);
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.9),
            0 0 0 1px rgba(255,255,255,0.05) inset;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 10;
          display: flex;
          flex-direction: column;
          overflow: visible;
          position: relative;
          will-change: transform;
        }

        .terminal-header {
          background: ${isDark ? "linear-gradient(to bottom, #1e293b, #0f172a)" : "linear-gradient(to bottom, #f1f5f9, #e2e8f0)"};
          padding: clamp(10px, 1.5vh, 16px) clamp(14px, 2vw, 24px);
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.5);
          box-shadow: 0 1px 2px rgba(0,0,0,0.3);
          flex-shrink: 0;
        }

        .mac-controls {
          display: flex;
          gap: clamp(5px, 0.8vw, 9px);
        }

        .dot {
          width: clamp(10px, 1.2vw, 14px);
          height: clamp(10px, 1.2vw, 14px);
          border-radius: 50%;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.2);
        }
        .dot.red    { background-color: #FF5F56; }
        .dot.yellow { background-color: #FFBD2E; }
        .dot.green  { background-color: #27C93F; }

        .terminal-title {
          flex: 1;
          text-align: center;
          font-family: var(--font-mono);
          font-size: var(--fs-title);
          font-weight: 500;
          color: ${isDark ? "#94A3B8" : "#475569"};
          letter-spacing: 0.3px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          /* nudge left to compensate for the dots so text appears centred */
          margin-right: clamp(44px, 5vw, 65px);
        }

        .terminal-body {
          flex: 1;
          padding: var(--pad-body-y) var(--pad-body-x);
          padding-right: clamp(20px, 25vw, 350px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .intro-greeting {
          font-family: var(--font-mono);
          color: var(--color-accent);
          font-size: var(--fs-greeting);
          margin-bottom: var(--gap-section);
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 1em;
          background-color: var(--color-accent);
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: var(--fs-name);
          font-weight: 800;
          margin: 0 0 var(--gap-section) 0;
          line-height: 1.05;
          background: ${isDark ? "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)" : "linear-gradient(135deg, #1e293b 0%, #2563eb 100%)"};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          /* prevent overflow on very narrow screens */
          word-break: break-word;
        }

        .roles {
          font-size: var(--fs-roles);
          color: ${isDark ? "#94a3b8" : "#475569"};
          font-weight: 500;
          margin-bottom: var(--gap-section);
          font-family: var(--font-display);
          line-height: 1.5;
        }

        .description {
          font-size: var(--fs-desc);
          line-height: 1.7;
          color: ${isDark ? "#cbd5e1" : "#334155"};
          max-width: 680px;
          margin-bottom: calc(var(--gap-section) * 1.6);
          overflow: hidden;
          white-space: normal; /* Allow text to wrap if it needs to, but for typewriter we often want to animate character by character */
          position: relative;
        }

        .typewriter-text {
          display: inline;
          background: linear-gradient(to right, var(--color-accent) 100%, transparent 100%);
          background-size: 0% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          animation: reveal 3s linear forwards;
          position: relative;
        }

        .description {
          font-size: var(--fs-desc);
          line-height: 1.7;
          color: ${isDark ? "#cbd5e1" : "#334155"};
          max-width: 680px;
          margin-bottom: calc(var(--gap-section) * 1.6);
          /* overflow: hidden; Removed to ensure cursor is visible */
          position: relative;
          min-height: 5em;
        }

        .typewriter-text {
          font-family: var(--font-body);
          display: inline;
        }

        .description span {
          display: inline;
        }

        .description .cursor {
          display: inline-block;
          width: 8px;
          height: 1.1em;
          background-color: var(--color-accent);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .action-buttons {
          display: flex;
          gap: var(--gap-btn);
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: var(--btn-pad-y) var(--btn-pad-x);
          border-radius: 8px;
          font-size: var(--fs-btn);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
          white-space: nowrap;
        }

        .btn-secondary {
          background-color: ${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
          color: var(--color-light-text);
          border: 1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          background-color: ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
          border-color: ${isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
          transform: translateY(-2px);
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          border: 1px solid var(--color-accent);
          box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);
        }
        .btn-primary:hover {
          background-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(37, 99, 235, 0.5);
        }

        .material-symbols-outlined {
          font-size: clamp(16px, 2vw, 22px);
          line-height: 1;
        }

        /* ── Extra-small phones (≤ 360px) ── */
        @media (max-width: 360px) {
          .roles {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
        }

        /* ── Landscape phones ── */
        @media (max-height: 480px) and (orientation: landscape) {
          .terminal-body {
            justify-content: flex-start;
            padding-top: 16px;
            padding-bottom: 16px;
          }
        }

        .portfolio-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 4vw, 60px);
          width: 100%;
          height: 100%;
        }

      .boy-container {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
  width: 280px;
  height: 420px;
  perspective: 1000px;
  display: flex; /* Keep this */
  align-items: center;
  justify-content: center;
  z-index: 20;
  pointer-events: none;
  /* Add this to ensure it doesn't leak space */
  overflow: hidden; 
}

/* Ensure it is completely removed from the layout when hidden */
@media (max-width: 1199px), (max-height: 799px) {
  .boy-container {
    display: none !important;
  }
}

        @media (max-height: 799px) {
          .boy-container {
            display: none;
          }
        }

        @media (min-width: 1920px) {
          .boy-container {
            right: 50px;
            width: 320px;
            height: 480px;
          }
        }

        @media (min-width: 2560px) {
          .boy-container {
            right: 70px;
            width: 400px;
            height: 600px;
          }
        }

        .boy-3d {
          width: 100%;
          height: 100%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          position: relative;
          transform: rotateY(-5deg) rotateX(2deg);
          transition: transform 0.6s ease;
        }

        .boy-3d:hover {
          transform: rotateY(-5deg) rotateX(2deg) scale(1.02);
        }

        .boy-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          max-width: 100%;
          max-height: 100%;
          display: block;
        }

        .boy-glow {
          display: none;
        }
          /* ── Mobile and Tablet adjustments for buttons ── */
        @media (max-width: 768px) {
          .action-buttons {
            flex-wrap: nowrap; /* Forces buttons to stay on the same line */
            width: 100%;       /* Takes up the full width of the container */
          }
          
          .btn {
            flex: 1;                 /* Makes both buttons share the space 50/50 */
            justify-content: center; /* Keeps the text and icons centered */
            padding-left: 8px;       /* Shrinks padding slightly so text fits */
            padding-right: 8px;
          }
          
          .btn .material-symbols-outlined {
            font-size: 18px; /* Slightly scales down the icon for tight spaces */
          }
        }
      `}</style>

      <div className="portfolio-wrapper">
        <div className="bg-glow" aria-hidden="true"></div>
        <div className="bg-glow-secondary" aria-hidden="true"></div>

        <div className="portfolio-container">
          <div className="terminal-card" role="main">
            <div className="terminal-header">
              <div className="mac-controls" aria-hidden="true">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="terminal-title">
                $ phanikumar/portfolio/terminal
              </div>
            </div>

            <div className="terminal-body">
              <div className="intro-greeting" aria-label="Terminal prompt">
                <span>$ echo "Hi, this is"</span>
                <span className="cursor" aria-hidden="true"></span>
              </div>

              <h1 className="hero-name">K.V.K. Phani Kumar</h1>

              <div className="roles">
                Full-Stack Developer&nbsp;&nbsp;&nbsp;•&nbsp;Software
                Engineer&nbsp;&nbsp;&nbsp;•&nbsp;ML Engineer
              </div>

              <p className="description">
                {displayText}
                <span className="cursor" aria-hidden="true"></span>
              </p>

              <div className="action-buttons">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    description
                  </span>
                  View Resume
                </a>
                <Link
                  to="/got-project"
                  className="btn btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    rocket_launch
                  </span>
                  Got a project?
                </Link>
              </div>
            </div>

            <div className="boy-container" aria-hidden="true">
              <div className="boy-3d">
                <div className="boy-glow"></div>
                <img
                  src="/assets/3d-image.png"
                  alt="3D Developer"
                  className="boy-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
