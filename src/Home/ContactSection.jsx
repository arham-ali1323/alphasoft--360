// src/components/ContactSection.jsx
import React, { memo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import personImage from "../assets/img/contact-us.jpg";

// Stat Card with CountUp
const StatCard = ({ value, label, isVisible }) => {
  // Separate numeric part and suffix (like "k" or "+")
  const numberPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div className="stat-card text-center">
      <h3>
        {isVisible ? (
          <CountUp end={numberPart} duration={2.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const ContactSection = () => {
  // Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.3,    // Trigger when 30% visible
  });

  return (
    <div className="contact-section-container ">
      {/* Main Content */}
      <div className="contact-main-content">
        {/* Left: Image + Idea Bubble */}
        <div className="image-and-bubble">
          <img
            src={personImage}
            alt="Businessman"
            className="contact-person-image"
          />
          <div className="idea-bubble">
            <p>Have an idea or Project?</p>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <div className="phone-icon-circle">
            <FaPhoneAlt />
          </div>
          <p className="call-us-text">CALL US 24/7</p>
          <p className="phone-number">(+123) 456-9989</p>
          <p className="contact-description">
            Have any idea or project in your mind? Call us or schedule an
            appointment. Our representative will reply to you shortly.
          </p>
           <button className="learn-more-btn">Lets Talk</button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar-wrapper mb-5" ref={ref}>
  <div className="stats-bar text-primary">
    <StatCard value="80k" label="Happy Clients" isVisible={inView} />
    <StatCard value="50+" label="Companies" isVisible={inView} />
    <StatCard value="230+" label="Projects Done" isVisible={inView} />
  </div>
</div>

    </div>
  );
};

export default ContactSection;
