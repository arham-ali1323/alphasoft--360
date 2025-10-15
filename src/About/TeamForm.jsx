// src/ServicesSection.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/img/Services.jpeg";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ServicesSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      toast.success('Email sent successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: ""
      });
    } catch (error) {
      console.log('FAILED...', error);
      toast.error('Failed to send email. Please try again.');
    }
  };

  return (
  <>
    <section className="Services-section py-5">
      <Container fluid>
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
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10,}"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message Here"
                    value={formData.message}
                    onChange={handleChange}
                  />
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
