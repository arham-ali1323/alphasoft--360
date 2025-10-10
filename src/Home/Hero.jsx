import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Generate new random seed on component mount (page refresh)
  useEffect(() => {
    setRefreshSeed(Math.random());
  }, []);

  // Randomly select 4 images on each page refresh
  const heroImages = useMemo(() => {
    const shuffled = [...allHeroImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [refreshSeed]); // Using refreshSeed as dependency to change on each refresh

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // EmailJS parameters - replace with your actual IDs
    const serviceID = 'your_service_id'; // Replace with your EmailJS Service ID
    const templateID = 'your_template_id'; // Replace with your EmailJS Template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS Public Key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send email. Please try again.');
      });
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
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="E-Mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
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
                            required
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
      <ToastContainer />
    </div>
  );
};

export default Hero;
