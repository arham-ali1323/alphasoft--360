import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';

// High-quality software company themed images from Unsplash
const allHeroImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&h=1200&fit=crop", // IT Software House 1
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2000&h=1200&fit=crop", // IT Software House 2
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=2000&h=1200&fit=crop", // IT Software House 3
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=2000&h=1200&fit=crop", // IT Software House 4
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2000&h=1200&fit=crop", // IT Software House 5
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2000&h=1200&fit=crop", // IT Software House 6
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&h=1200&fit=crop"  // IT Software House 7
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
      <Carousel className="hero-carousel" interval={5000} fade>
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
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
