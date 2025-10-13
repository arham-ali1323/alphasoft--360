import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Carousel, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

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
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setRefreshSeed(Math.random());
  }, []);

  // Shuffle hero images each reload
  const heroImages = useMemo(() => {
    const shuffled = [...allHeroImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [refreshSeed]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const name = formData.get("from_name")?.trim();
    const email = formData.get("from_email")?.trim();
    const phone = formData.get("from_phone")?.trim();
    const message = formData.get("message")?.trim();

    console.log("Form values:", { name: name || 'empty', email: email || 'empty', phone: phone || 'empty', message: message || 'empty' });

    // Manual validation
    if (!name || !email || !phone || !message) {
      console.log("Validation failed:", { name: !!name, email: !!email, phone: !!phone, message: !!message });
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PK;

    try {
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(`Error: ${error.text || error.message || "Try again later."}`);
    } finally {
      setLoading(false);
    }
  };

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

                      <Form ref={formRef} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="from_name"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="E-Mail"
                            name="from_email"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            name="from_phone"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                            name="message"
                          />
                        </Form.Group>

                        <Button
                          type="submit"
                          className="w-100 hero-submit-btn d-flex justify-content-center align-items-center"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Spinner
                                animation="border"
                                size="sm"
                                role="status"
                                className="me-2"
                              />
                              Sending...
                            </>
                          ) : (
                            "Submit Now"
                          )}
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

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Hero;
