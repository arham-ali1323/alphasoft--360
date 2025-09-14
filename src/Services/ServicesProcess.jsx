// src/components/Servicesprocess2Section.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Step Card Component
const Process2Step = ({ number, title, description }) => {
  return (
    <div className="process2-step">
      <h3>{number}.</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Servicesprocess2 = () => {
  return (
    <Container fluid className="Services-process2">
      <Row className="w-100 m-0">
        {/* Left Section */}
        <Col lg={4} className="p-0">
          <div className="process2-left-panel">
            <p className="Services-process2-tag">Working Process</p>
            <h2>
              Our Services Process – How We Work For Our Customers
            </h2>
            <button className="contact-us-button">Contact Us</button>
          </div>
        </Col>

        {/* Right Section */}
        <Col lg={8} className="p-0 d-flex align-items-center">
          <div className="process2-right-steps">
            <Process2Step
              number="1"
              title="Discovery"
              description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
            <Process2Step
              number="2"
              title="Planning"
              description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
            <Process2Step
              number="3"
              title="Execute"
              description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
            <Process2Step
              number="4"
              title="Deliver"
              description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicesprocess2;
