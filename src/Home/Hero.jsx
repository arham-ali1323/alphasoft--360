import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Hero = () => {
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
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="E-Mail" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
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
    </div>
  )
}

export default Hero
