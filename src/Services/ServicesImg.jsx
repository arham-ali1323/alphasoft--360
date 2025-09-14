// src/components/ImageTextSection.jsx
import React from "react";

const ServicesImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`,
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
          // background: "rgba(0, 0, 0, 0.5)",
          // height: "100%",
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
