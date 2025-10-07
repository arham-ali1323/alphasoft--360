// src/components/ContactSection.jsx
import React, { memo } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import personImage from "../assets/img/contact-us.jpg";
import client1 from "../assets/img/client1.png";
import client2 from "../assets/img/client2.png";
import client3 from "../assets/img/client3.png";
import mail from "../assets/img/mail.png";
import worldGlobe from "../assets/img/world-globe.png";
import dataAnalytics from "../assets/img/data-analytics.png";

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
            <p>Got a Project Idea?</p>
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

          {/* Additional Contact Methods */}
          <div className="additional-contact-methods">
            <div className="contact-method">
              <img src={mail} alt="Email" className="contact-icon-img" />
              <div>
                <p className="contact-method-title">Email Us</p>
                <p className="contact-method-detail">info@alphasoft360.com</p>
              </div>
            </div>
            <div className="contact-method">
              <img src={worldGlobe} alt="Location" className="contact-icon-img" />
              <div>
                <p className="contact-method-title">Our Location</p>
                <p className="contact-method-detail">123 Business Ave, Tech City</p>
              </div>
            </div>
          </div>

           <button className="lets-talk-button">Lets Talk</button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar-wrapper mb-5" ref={ref}>
  <div className="stats-bar text-primary">
    <StatCard value="60k" label="Happy Clients" isVisible={inView} />
    <StatCard value="40+" label="Companies" isVisible={inView} />
    <StatCard value="250+" label="Projects Done" isVisible={inView} />
  </div>
</div>
    </div>
  );
};

export default ContactSection;
