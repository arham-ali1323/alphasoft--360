// src/components/ContactImage.jsx
import React from "react";

const ContactImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        background: `url("https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat`,
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
          // background: "rgba(0, 0, 0, 0.5)",
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
