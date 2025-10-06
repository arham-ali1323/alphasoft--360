// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ image, title, category }) => {
  return (
    <div className="service-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default ServiceCard;