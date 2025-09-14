// src/ServicesSection.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/img/hero-bg.jpg"; // <-- replace with your image
import bgImage2 from "../assets/img/servicesbg.jpg"; // replace with your image

const ServicesSection = () => {
  return (
    <>
      <section className="Services-section my-5">
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
              <div className="form-box p-4 text-white h-100 d-flex flex-column justify-content-center p-5">
                <p>Lets Talk</p>
                <h3 className="fw-bold mb-4">Request a Free Quote</h3>
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
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your Message Here"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="submit-btn px-4 py-2 fw-bold"
                  >
                    Submit Now
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
<Container
  fluid
  className="my-5 p-5 rounded-3 text-white"
  style={{
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for readability */}
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "2rem",
      borderRadius: "15px",
    }}
  >
    <Row className="align-items-center text-center text-md-start">
      {/* Heading Column */}
      <Col xs={12} md={8} className="mb-3 mb-md-0">
        <h2 className="fw-bold display-6">
          Grow Your Business and Build Your Website or Software With Us.
        </h2>
      </Col>

      {/* Button Column */}
      <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
        <a href="#" className="btn btn-primary btn-lg px-4 py-2">
          Get in touch
        </a>
      </Col>
    </Row>
  </div>
</Container>

    </>
  );
};

export default ServicesSection;
