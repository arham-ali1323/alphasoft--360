import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/AlphaSoft_logo1.png";

const MainNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-light py-2 border-bottom">
        <Container>
          <Row className="align-items-center text-center text-lg-start gy-2">
            <Col lg={4} md={12}>
              <img src={logo} alt="logo" width={120} />
            </Col>
            <Col
              lg={8}
              md={12}
              className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3"
            >
              <a href="/" className="text-decoration-none text-dark small">
                <FaMapMarkerAlt className="text-primary me-2" />
                Main Pakavenue Rd, Sahiwal, 57000, Pakistan
              </a>
              <a
                href="mailto:info@yourmail.com"
                className="text-decoration-none text-dark small"
              >
                <FaEnvelope className="text-primary me-2" />
                info@yourmail.com
              </a>
              <a
                href="tel:+01234567890"
                className="text-decoration-none text-dark small"
              >
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                +0123 456 7890
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Navbar */}
      <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
        {" "}
        <Container>
          {" "}
          <Navbar.Brand href="/">AlphaSoft360</Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto me-3">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/NotFound">
                Pages
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Team">
                Team
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-3 navbar-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn />
              </a>
            </div>
            <Button variant="outline-light ms-auto" onClick={() => setShowOffcanvas(true)}>
              <i className="bi bi-telephone-fill"></i>
            </Button>
          </Navbar.Collapse>
        </Container>{""}
      </Navbar>

      {/* Hero Section */}

      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p><FaMapMarkerAlt className="me-2" /> Main Pakavenue Rd, Sahiwal, 57000, Pakistan</p>
            <p><FaEnvelope className="me-2" /> info@yourmail.com</p>
            <p><i className="bi bi-telephone me-2"></i> +0123 456 7890</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
};

export default MainNavbar;
