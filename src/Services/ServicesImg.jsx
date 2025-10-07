// src/components/ImageTextSection.jsx
import React from "react";

const ServicesImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&h=300&fit=crop')`, // Live Unsplash image link for IT software houses
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
        position: "relative",
        color: "#fff",
      }}
    >
      <div
        className="overlay"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Services</h2>
        <p>Home / Services</p>
      </div>
    </section>
  );
};

export default ServicesImage;
