import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { toast } from 'react-toastify';
import { Resend } from 'resend';

const FaQForm = () => {
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

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'New Free Consultation Request from AlphaSoft Website',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

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
    <section className=" py-5 bg-light">
      <Container>
        <Row className=" Faq-Form justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-4">
            <h6
  className="text-primary text-center text-uppercase fw-semibold mx-auto mb-3 p-2"
  style={{ width: "fit-content", }}
>
  Contact
</h6>

              <h2 className="fw-bold">Request A Free Consultation</h2>
            </div>

            <Form className="p-4 rounded shadow-sm" onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control-lg rounded-3"
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
                    className="form-control-lg rounded-3"
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
                    className="form-control-lg rounded-3"
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
                    className="form-control-lg rounded-3"
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
                  className="form-control-lg rounded-3"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  className="btn btn-primary btn-lg px-5 rounded-3 submit-btn"
                >
                  Submit Now
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaQForm;
