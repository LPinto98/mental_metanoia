import React from "react";
import "./About.css"; // You can create this CSS file to style the component
import "@fortawesome/fontawesome-free/css/all.css";

function About() {
  return (
    <div className="main-body py-5">
      <div className="about-container container">
        <div className="about-header">
          <h1>About Metanoia Mental Health</h1>
        </div>
        <div className="about-content">
          <p>
            The word <strong>'Metanoia'</strong> traditionally means 'changing
            one's mind, heart, and way of life'. At Metanoia Mental Health, we
            are a holistic online space dedicated to offering affordable and
            accessible therapy and counselling services.
          </p>
          <p>
            Our mission is to create a supportive and compassionate environment
            that promotes mental well-being and emotional healing. We believe in
            the transformative power of therapy to help individuals navigate
            through life's challenges.
          </p>
        </div>
        <div className="about-links">
          <h2>Connect with Us</h2>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/metanoia-mental-health/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/metanoia.mentalhealth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
