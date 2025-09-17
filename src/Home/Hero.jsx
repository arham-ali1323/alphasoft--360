import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'Please fill in all fields!'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'Please enter a valid email address!'
      });
      return;
    }

    // Success alert
    setAlert({
      show: true,
      variant: 'success',
      message: 'Form submitted successfully!'
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, variant: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear alert when user starts typing
    if (alert.show) {
      setAlert({ show: false, variant: '', message: '' });
    }
  };

  return (
    <div>
      <div className="hero d-flex align-items-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=3840&q=100')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Container>
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={6} className="text-white">
              <h1 className="fw-bold">
                IT Consulting Services For Your Business
              </h1>
              <p className="lead">
                AlphaSoft360 is a leading technology solutions provider company
                all over the world with over 20 years of experience.
              </p>
            </Col>

            {/* Right Form */}
            <Col md={5} className="ms-auto">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="fw-bold mb-3">Schedule Your Appointment</h4>
                <p className="text-muted">
                  We are here to help you 24/7 with experts
                </p>
                {alert.show && (
                  <Alert variant={alert.variant} onClose={() => setAlert({ show: false, variant: '', message: '' })} dismissible>
                    {alert.message}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="Name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="E-Mail" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="Phone Number" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit Now
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hero;
