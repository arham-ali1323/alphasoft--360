import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';

// High-quality software company themed images from Unsplash
const allHeroImages = [
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1581090700227-f7a447b9d577?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-0b3e1e7e7b59?w=2000&h=1200&fit=crop"
];


const Hero = () => {
  const [refreshSeed, setRefreshSeed] = useState(0);

  // Generate new random seed on component mount (page refresh)
  useEffect(() => {
    setRefreshSeed(Math.random());
  }, []);

  // Randomly select 4 images on each page refresh
  const heroImages = useMemo(() => {
    const shuffled = [...allHeroImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [refreshSeed]); // Using refreshSeed as dependency to change on each refresh

  return (
    <div>
      <Carousel className="hero-carousel" interval={5000} fade controls={false}>
        {heroImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero d-flex align-items-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
              }}
            >
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
                    <div className="hero-form rounded-4 rounded shadow">
                      <h4 className="fw-bold text-light mb-3">Schedule Your Appointment</h4>
                      <p className="text-light mb-4">
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
                        <Button type="submit" className="w-100 hero-submit-btn">
                          Submit Now
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
