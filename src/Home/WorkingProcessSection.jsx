// src/components/WorkingProcessSection.js
import React from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="process-step">
      <h3>{number}.</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const WorkingProcessSection = () => {
  return (
    <div className="working-process-container">
      {/* Left Section: Title and Contact Us button */}
      <div className="process-left-panel">
        <p className="working-process-tag">WORKING PROCESS</p>
        <h2>
          Our Working Process - How We Work For Our Customers
        </h2>
        <button className="learn-more-btn">Contact Us</button>
      </div>

      {/* Right Section: Numbered Steps */}
      <div className="process-right-steps">
        <ProcessStep
          number="1"
          title="Discovery"
          description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
        />
        <ProcessStep
          number="2"
          title="Planning"
          description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
        />
        <ProcessStep
          number="3"
          title="Execute"
          description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
        />
        <ProcessStep
          number="4"
          title="Deliver"
          description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
        />
      </div>
    </div>
  );
};

export default WorkingProcessSection;