import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/backButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="back-to-home-btn"
      title="Go back to home"
    >
      ← Home
    </button>
  );
};

export default BackButton;
