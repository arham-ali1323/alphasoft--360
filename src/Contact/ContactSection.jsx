import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaHome, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-stretch">
          {/* Left Side - Contact Info */}
          <Col md={5} className="mb-4">
            <div className="contact-info-box h-100 text-white p-4 rounded">
              <p className="small">LET'S TALK</p>
              <h3 className="fw-bold mb-4">Speak With Expert Engineers.</h3>

              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <FaHome size={24} />
                </div>
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">(+088)589-8745</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <FaPhone size={24} />
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">support@rstheme.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="icon-box me-3">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">New Jersey, 1201, USA</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col md={7}>
            <h6 className="text-primary">GET IN TOUCH</h6>
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
              <Button type="submit" className="submit-btn px-4 py-2">
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default ContactSection;
