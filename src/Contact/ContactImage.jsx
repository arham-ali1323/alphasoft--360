// src/components/ContactImage.jsx
import React from "react";

const ContactImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        background: `url("https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=3840&q=100") center/cover no-repeat`,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className="overlay"
       style={{
          //  
          // height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          Contact
        </h2>
        <p>Home / Contact</p>
      </div>
    </section>
  );
};

export default ContactImage;
