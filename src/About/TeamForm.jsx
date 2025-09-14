// src/ServicesSection.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/img/hero-bg.jpg"; // <-- replace with your image

const ServicesSection = () => {
  return (
  <>
    <section className="Services-section py-5">
      <Container>
       <Row className="align-items-stretch">
  <Col md={5} className="no-gap">
            <div
              className="contact-image position-relative overflow-hidden h-100"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "380px",
              }}
            >
              {/* Overlay */}
              <div className="overlay position-absolute w-100 h-100 top-0 start-0 bg-dark bg-opacity-50"></div>
              {/* Play Button */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <button className="play-btn rounded-circle d-flex align-items-center justify-content-center">
                  <FaPlay size={20} />
                </button>
              </div>
            </div>
          </Col>

          {/* Right Side - Gradient Form */}
 <Col md={7} className="no-gap">
            <div className="form-box p-4 text-white h-100 d-flex flex-column justify-content-center">
              <h6 className="fw-bold">GET IN TOUCH</h6>
              <h3 className="fw-bold mb-4">Fill The Form Below</h3>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control type="email" placeholder="E-Mail" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder="Your Website" />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message Here" />
                </Form.Group>
                <Button type="submit" className="submit-btn px-4 py-2 fw-bold">
                  Submit Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
                </>
  );
};

export default ServicesSection;
