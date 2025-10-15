import React from 'react';
import { Link } from 'react-router-dom';
import portrait1 from '../assets/img/portrait-1.jpg';
import portrait2 from '../assets/img/portrait-3.jpg';
import portrait3 from '../assets/img/portrait-4.jpg';
import portrait4 from '../assets/img/portrait-5.jpg';

const processSteps = [
  {
    id: 'arham-ali',
    image: portrait1,
    title: 'Requirement Analysis',
    description: 'We thoroughly understand your business needs, gather detailed requirements, and define project scope to ensure a clear roadmap for success.',
  },
  {
    id: 'david-khan',
    image: portrait2,
    title: 'Design & Planning',
    description: 'Our team creates comprehensive designs, architectures, and project plans, ensuring scalability, security, and alignment with your goals.',
  },
  {
    id: 'ahmed_hassan',
    image: portrait3,
    title: 'Development',
    description: 'Using cutting-edge technologies and best practices, we build robust, efficient software solutions tailored to your specifications.',
  },
  {
    id: 'michael-brown',
    image: portrait4,
    title: 'Testing & Deployment',
    description: 'Rigorous testing ensures quality and reliability. We handle seamless deployment and provide ongoing support for optimal performance.',
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
                  <Link to={`/team/${step.id}`}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="img-fluid rounded-circle process-image"
                    />
                  </Link>
                  {/* Decorative dashed circle */}
                  <div className="dashed-circle"></div>
                  {/* Blue circles */}
                  <div className="blue-circle circle-1"></div>
                  <div className="blue-circle circle-2"></div>
                </div>
                <h5 className="step-title mt-4">{step.title}</h5>
                <p className="step-description mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkSection;