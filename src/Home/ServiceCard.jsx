// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ image, title, category }) => {
  // Generate random icon from FontAwesome CDN
  const randomIcon = `https://picsum.photos/seed/${Math.random()}/64/64?text=${title.charAt(0)}`;

  return (
    <div className="service-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-icon-overlay">
          <img src={randomIcon} alt="Service icon" className="service-icon" />
        </div>
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default ServiceCard;