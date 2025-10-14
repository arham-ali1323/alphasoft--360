import React from 'react';
import portrait1 from '../assets/img/portrait-1.jpg'; 
import portrait2 from '../assets/img/portrait-6.jpg';
import portrait3 from '../assets/img/portrait-3.jpg';
import portrait4 from '../assets/img/portrait-5.jpg';

const processSteps = [
  {
    image: portrait1, // Replace with your image URL for Discovery
    title: 'Discovery',
  },
  {
    image: portrait2, // Replace with your image URL for Planning
    title: 'Planning',
  },
  {
     image: portrait3,
         title: 'Execute',
  },
  {
    image: portrait4, // Replace with your image URL for Deliver
    title: 'Deliver',
  },
];

const TeamWorkSection = () => {
  return (
    <section className="working-process-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="process-tag">PROCESS</span>
          <h2 className="section-title mt-3">Our Working Process</h2>
        </div>
        <div className="row justify-content-center">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="process-step-card text-center">
                <div className="process-image-wrapper">
                  <a href="#">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="img-fluid rounded-circle process-image"
                    />
                  </a>
                  {/* Decorative dashed circle */}
                  <div className="dashed-circle"></div>
                  {/* Blue circles */}
                  <div className="blue-circle circle-1"></div>
                  <div className="blue-circle circle-2"></div>
                </div>
                <h5 className="step-title mt-4">{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkSection;