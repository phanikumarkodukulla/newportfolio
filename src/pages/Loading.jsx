import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loading.css";

const Loading = () => {
  const containerRef = useRef(null);
  const topHalfRef = useRef(null);
  const bottomHalfRef = useRef(null);
  const textRef = useRef(null);
  const svgTextRef = useRef(null);
  const svgRef = useRef(null);
  const tipRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state - hide text
    gsap.set(textRef.current, {
      opacity: 0,
    });

    // Initial state for halves
    gsap.set([topHalfRef.current, bottomHalfRef.current], {
      y: 0,
      opacity: 1,
    });

    // Handwriting Animation Logic
    const runHandwritingAnim = () => {
      const el = svgTextRef.current;
      const svg = svgRef.current;
      if (!el || !svg) return;

      // ease function
      const ease = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const organicSpeed = (t) => {
        const wave = 1 + 0.055 * Math.sin(t * Math.PI * 18);
        return Math.min(ease(t) * wave, 1);
      };

      // Create tip
      const createTip = () => {
        const tipEl = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g",
        );

        const glow = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        glow.setAttribute("r", "12");
        glow.setAttribute("fill", "rgba(10, 25, 47, 0.10)"); // Dark blue glow

        const mid = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        mid.setAttribute("r", "5");
        mid.setAttribute("fill", "rgba(10, 25, 47, 0.18)"); // Dark blue mid

        const core = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        core.setAttribute("r", "2.2");
        core.setAttribute("fill", "#0A192F"); // Dark blue core

        tipEl.appendChild(glow);
        tipEl.appendChild(mid);
        tipEl.appendChild(core);
        svg.appendChild(tipEl);
        tipRef.current = tipEl;
      };

      const moveTip = (textEl, totalLen, progress) => {
        const tipEl = tipRef.current;
        if (!tipEl) return;
        const show = progress > 0.005 && progress < 0.994;
        tipEl.style.display = show ? "" : "none";
        if (!show) return;
        try {
          const pt = textEl.getPointAtLength(totalLen * progress);
          tipEl.setAttribute("transform", `translate(${pt.x},${pt.y})`);
        } catch (e) {
          tipEl.style.display = "none";
        }
      };

      let len;
      try {
        len = el.getTotalLength();
      } catch (e) {
        len = 2400;
      }

      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;

      createTip();

      const DURATION = 3500; // Slightly faster than original 4200 to fit transition
      let t0 = null;

      const frame = (ts) => {
        if (!t0) t0 = ts;
        const raw = Math.min((ts - t0) / DURATION, 1);
        const progress = organicSpeed(raw);
        el.style.strokeDashoffset = len * (1 - progress);
        moveTip(el, len, progress);
        if (raw < 1) {
          requestAnimationFrame(frame);
        } else {
          el.style.strokeDashoffset = 0;
          if (tipRef.current) tipRef.current.style.display = "none";
        }
      };

      requestAnimationFrame(frame);
    };

    // Step 1: Fade in text container and start handwriting
    tl.to(
      textRef.current,
      {
        opacity: 1,
        duration: 0.3,
        onStart: () => {
          setTimeout(runHandwritingAnim, 100);
        },
      },
      0,
    );

    // Step 2: Wait for animation to finish then split
    tl.to({}, { duration: 4 }, 0); // Give handwriting time

    // Step 3: Slice animation - top goes up, bottom goes down
    tl.to(
      topHalfRef.current,
      {
        y: -window.innerHeight,
        duration: 1.5,
        ease: "power2.inOut",
      },
      3.5,
    );

    tl.to(
      bottomHalfRef.current,
      {
        y: window.innerHeight,
        duration: 1.5,
        ease: "power2.inOut",
      },
      3.5,
    );

    // Step 4: Fade out and hide text
    tl.to(
      textRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      3.5,
    );

    // After animation completes, hide container and navigate
    tl.add(() => {
      // Mark as hidden so React will remove it
      setIsHidden(true);

      // Dispatch event to notify App.jsx that intro is complete
      window.dispatchEvent(new Event("splitIntroComplete"));

      // Scroll to intro section
      const introSection = document.querySelector("#intro-section");
      if (introSection) {
        window.scrollTo({ top: 0, behavior: "instant" });
        introSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, []);

  // Don't render if hidden
  if (isHidden) {
    return null;
  }

  return (
    <div className="split-intro-container" ref={containerRef}>
      {/* Top Half - Peach background, PHANI in red */}
      <div className="split-half top-half" ref={topHalfRef}>
        <div className="half-content">
          <h2 className="half-text phani-text">PHANI's</h2>
        </div>
      </div>

      {/* Bottom Half - Red background, KUMAR in peach */}
      <div className="split-half bottom-half" ref={bottomHalfRef}>
        <div className="half-content">
          <h2 className="half-text kumar-text">PORTFOLIO</h2>
        </div>
      </div>

      {/* Portfolio Text */}
      <div className="portfolio-text-wrapper" ref={textRef}>
        <div className="scene">
          <svg ref={svgRef} id="svg-handwriting" viewBox="0 0 900 220">
            <text
              ref={svgTextRef}
              id="txt-handwriting"
              x="450"
              y="175"
              text-anchor="middle"
            >
              DEVELOPER
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
