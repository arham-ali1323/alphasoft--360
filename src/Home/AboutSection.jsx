// src/components/AboutSection.js
import React from "react";
import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="progress-bar-label">{label}</span>
        <span className="progress-bar-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-section">
      {/* Left Images */}
      <div className="about-left">
        <div className="top-img">
          <img src={person1} alt="Main" />
        </div>
        <div className="bottom-imgs">
          <img src={person2} alt="Bottom 1" />
          <img src={person3} alt="Bottom 2" />
        </div>
      </div>

      {/* Right Content */}
      <div className="about-right">
        <div className="about-header">
          <span className="line"></span>
          <span>-ABOUT US</span>
        </div>
        <h2>AlphaSoft360: Increasing Business Success With Technology</h2>
        <p className="about-description">
          AlphaSoft360 has over 25 years of experience in IT services, developing software applications
          and mobile apps for clients all over the world.
        </p>

        {/* Progress Bars */}
        <div className="progress-bars">
          <ProgressBar label="Software Development" percentage={92} />
          <ProgressBar label="Cyber Security" percentage={80} />
          <ProgressBar label="Artificial Intelligence" percentage={95} />
          <ProgressBar label="Web Development" percentage={78} />
        </div>

        <button className="learn-more-btn">Learn-More</button>
      </div>
    </div>
  );
};

export default AboutSection;
