// src/components/MapSection.jsx
import React from "react";

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.995422684179!2d-74.00601518459486!3d40.71277597933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31667e6b7f%3A0x2d0e5d4af3cfc0!2sNew%20York%20City%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633176820655!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;
