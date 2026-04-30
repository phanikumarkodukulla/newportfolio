import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Educations from "./pages/Educations";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Skills from "./pages/Skills";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/educations" element={<Educations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
