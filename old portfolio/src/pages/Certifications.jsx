import React from "react";
import BackButton from "../components/BackButton";
import "../styles/certifications.css";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Practitioner",
      issuer: "Google Cloud",
      image: "/google-cert.png",
    },
    {
      id: 2,
      title: "SQL with AI Certificate",
      issuer: "Simplilearn",
      image: "/sqlwithaicert.png",
    },
    {
      id: 3,
      title: "Pandas Certificate",
      issuer: "DataCamp",
      image: "/pandas-cert.jpeg",
    },
    {
      id: 4,
      title: "C-C-A Certificate",
      issuer: "AWS",
      image: "/c-c-a.png",
    },
  ];

  return (
    <div className="certifications-page">
      <BackButton />

      <div className="animated-bg">
        <div className="animated-bg-inner"></div>
      </div>

      <div className="certifications-container">
        <div className="page-header">
          <h1 className="page-title">Professional Certifications</h1>
          <p className="page-subtitle">
            My credentials and achievements in various domains
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="certification-card"
              data-aos="fade-up"
            >
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
