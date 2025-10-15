import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaHome, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });
  const [validated, setValidated] = useState(false);

  const handleCallClick = () => {
    window.location.href = 'tel:+1234569989'; // Replace with actual phone number if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setAlert({
        show: true,
        variant: "danger",
        message: "Please fill all required fields correctly!"
      });
    } else {
      setAlert({
        show: true,
        variant: "success",
        message: "Thank you! We'll contact you soon."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: ""
      });
      setValidated(false);
    }

    setValidated(true);
    setTimeout(() => {
      setAlert({ show: false, variant: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-stretch">
          {/* Left Side - Contact Info */}
          <Col md={5} className="mb-4">
            <div className="contact-info-box h-100 text-white p-4 rounded">
              <p className="small">LET'S TALK</p>
              <h3 className="fw-bold mb-4">Speak With Expert Engineers.</h3>

              {/* <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <FaHome size={24} />
                </div>
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">(+088)589-8745</p>
                </div>
              </div> */}

              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                 <animated-icons
 src="https://animatedicons.co/get-icon?name=Calling%20V3&style=minimalistic&token=66ff3706-138c-41fa-a993-dee03566e48c"
  trigger="loop"
  attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","group-2":"#03228FFF","background":"#03228FFF"}}'
    height="30"
  width="30"
></animated-icons>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">alphasoft@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="icon-box me-3">
                     <animated-icons
 src="https://animatedicons.co/get-icon?name=location&style=minimalistic&token=45b3e531-a5b4-4725-afdf-330d67562c0e"
  trigger="loop"
  attributes='{"variationThumbColour":"#000000","variationName":"Dark","variationNumber":4,"numberOfGroups":2,"strokeWidth":1.5,"backgroundIsGroup":true,"defaultColours":{"group-1":"#FFFFFFFF","group-2":"#000000","background":"#03228FFF"}}'
    height="30"
  width="30"
></animated-icons>
                </div>
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">Main Pakavenue Road, Sahiwal, 57000, Pakistan</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col md={7}>
            <h6 className="text-primary">GET IN TOUCH</h6>
            <h3 className="fw-bold mb-4">Fill The Form Below</h3>
            
            {alert.show && (
              <Alert 
                variant={alert.variant} 
                onClose={() => setAlert({ show: false, variant: "", message: "" })} 
                dismissible
                className="mb-3"
              >
                {alert.message}
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please provide your message.
                </Form.Control.Feedback>
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
