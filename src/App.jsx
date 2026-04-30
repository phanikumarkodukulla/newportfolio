import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Scene3D from "./components/Scene3D";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";
import Priest from "./pages/Priest";
import Contact from "./pages/Contact";
import Loading from "./pages/Loading";

function App() {
  const location = useLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const handleIntroComplete = () => {
      setLoadingComplete(true);
    };

    window.addEventListener("splitIntroComplete", handleIntroComplete);

    // Fallback in case event doesn't fire
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 6000);

    return () => {
      window.removeEventListener("splitIntroComplete", handleIntroComplete);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loading />

      <div
        className="relative w-full min-h-screen transition-colors duration-300"
        style={{
          color: "#E8F1F5",
          opacity: loadingComplete ? 1 : 0,
          pointerEvents: loadingComplete ? "auto" : "none",
          transition:
            "opacity 0.5s ease-in-out, color 0.3s ease, background-color 0.3s ease",
        }}
      >
        {/* 3D Background */}
        <Scene3D />

        {/* Main Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow pb-24">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/priest" element={<Priest />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
