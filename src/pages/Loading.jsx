import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loading.css";

const Loading = () => {
    const containerRef = useRef(null);
    const topHalfRef = useRef(null);
    const bottomHalfRef = useRef(null);
    const textRef = useRef(null);
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

        // Step 1: Animate text with writing effect
        const textElement = textRef.current?.querySelector(".portfolio-text");

        // Fade in text container
        tl.to(
            textRef.current,
            {
                opacity: 1,
                duration: 0.3,
            },
            0,
        );

        // Animate cursive text with typewriter effect
        if (textElement) {
            tl.fromTo(
                textElement,
                {
                    opacity: 0,
                    maxWidth: "0px",
                },
                {
                    opacity: 1,
                    maxWidth: "100%",
                    duration: 2,
                    ease: "power1.inOut",
                },
                0,
            );
        }

        // Step 2: Wait for 2 seconds delay before split
        tl.to({}, { duration: 2 }, 1.5);

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
                <div className="portfolio-text">Developer</div>
            </div>
        </div>
    );
};

export default Loading;
