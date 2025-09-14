// src/components/ITSolutionsSection.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import your placeholder images
import productEngineeringImg from '../assets/img/6.jpg';
import analyticSolutionsImg from '../assets/img/7.jpg';
import growthStrategiesImg from '../assets/img/8.jpg';

// Import ServiceCard component
import ServiceCard from './Servicescard';

const ITSolutionsSection = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  return (
    <div className="it-solutions-section">
      <div className="section-header">
        <p className="project-tag">PROJECT</p>
        <h2>We Are Offering All Kinds of IT Solutions Services</h2>
      </div>

      <div className="carousel-container">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <ServiceCard
              image={productEngineeringImg}
              title="Product Engineering"
              category="IT Technology"
            />
          </div>
          <div className="item">
            <ServiceCard
              image={analyticSolutionsImg}
              title="Analytic Solutions"
              category="IT Technology"
            />
          </div>
          <div className="item">
            <ServiceCard
              image={growthStrategiesImg}
              title="Growth Strategies"
              category="IT Technology"
            />
          </div>
           <div className="item">
            <ServiceCard
              image={growthStrategiesImg}
              title="Growth Strategies"
              category="IT Technology"
            />
          </div>
           <div className="item">
            <ServiceCard
              image={growthStrategiesImg}
              title="Growth Strategies"
              category="IT Technology"
            />
          </div>
           <div className="item">
            <ServiceCard
              image={growthStrategiesImg}
              title="Growth Strategies"
              category="IT Technology"
            />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ITSolutionsSection;
