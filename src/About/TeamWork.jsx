import React from 'react';
import { Link } from 'react-router-dom';
import maroof_sultan from "../assets/img/maroof_sultan.jpg";
import muhammad_shahbaz from "../assets/img/muhammad_shahbaz.jpg";
import muazam_mughal from "../assets/img/muazam_mughal.jpg";
import arham_ali from "../assets/img/arham_ali.jpg";

const processSteps = [
  {
    id: 'maroof_sultan',
    image: maroof_sultan,
    title: 'Requirement Analysis',
    description: 'We thoroughly understand your business needs, gather detailed requirements, and define project scope to ensure a clear roadmap for success.',
  },
  {
    id: 'muhammad_shahbaz',
    image: muhammad_shahbaz,
    title: 'Design & Planning',
    description: 'Our team creates comprehensive designs, architectures, and project plans, ensuring scalability, security, and alignment with your goals.',
  },
  {
    id: 'muazam_mughal',
    image: muazam_mughal,
    title: 'Development',
    description: 'Using cutting-edge technologies and best practices, we build robust, efficient software solutions tailored to your specifications.',
  },
  {
    id: 'arham_ali',
    image: arham_ali,
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