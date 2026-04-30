import React from "react";
import BackButton from "../components/BackButton";
import "../styles/publications.css";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "The Alphabet of Python",
      description:
        "A comprehensive guide to Python programming basics and advanced concepts",
      format: "PDF",
      image: "/my-book.jpg",
      link: "#",
    },
  ];

  return (
    <div className="publications-page">
      <BackButton />

      <div className="animated-bg">
        <div className="animated-bg-inner"></div>
      </div>

      <div className="publications-container">
        <div className="page-header">
          <h1 className="page-title">Publications</h1>
          <p className="page-subtitle">Books, articles, and written works</p>
        </div>

        <div className="publications-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="pub-image-wrapper">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="pub-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-description">{pub.description}</p>
                <span className="pub-format">{pub.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
