import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// High-quality software company themed images from Unsplash
const allHeroImages = [
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1581090700227-f7a447b9d577?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=2000&h=1200&fit=crop"
];

const Hero = () => {
  const [refreshSeed, setRefreshSeed] = useState(0);

  useEffect(() => {
    setRefreshSeed(Math.random());
  }, []);

  // Shuffle hero images each reload
  const heroImages = useMemo(() => {
    const shuffled = [...allHeroImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [refreshSeed]);

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
                  <Col md={6} className="text-white">
                    <h1 className="fw-bold">
                      IT Consulting Services For Your Business
                    </h1>
                    <p className="lead">
                      AlphaSoft360 is a leading technology solutions provider company
                      all over the world with over a decade of proven expertise.
                    </p>
                  </Col>

                  <Col md={5} className="ms-auto">
                    <div
                      className="hero-form rounded-4 shadow p-4"
                      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    >
                      <h4 className="fw-bold text-light mb-3">Schedule Your Appointment</h4>
                      <p className="text-light mb-4">
                        We are here to help you 24/7 with our experts
                      </p>
                      <p className="text-light">
                        Contact us directly at: <strong>info@alphasoft360.com</strong>
                      </p>
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
