import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaHeartbeat
} from "react-icons/fa";
import logo from "../assets/img/AlphaSoft_logo.png";
import call from "../assets/img/Calling V3 .svg";

const MainNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
    setShowOffcanvas(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-light py-2 border-bottom">
        <Container>
          <Row className="align-items-center text-center text-lg-start gy-2">
            <Col lg={4} md={12}>
              
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
                <FaPhone className="text-primary me-2" />
                +0123 456 7890
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navbar */}
      <Navbar
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
        expanded={expanded}
        onToggle={(open) => setExpanded(open)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/"> <img src={logo} alt="logo" width={120} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavClick}>About</Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={handleNavClick}>Services</Nav.Link>
              <Nav.Link as={Link} to="/NotFound" onClick={handleNavClick}>Pages</Nav.Link>
              <Nav.Link as={Link} to="/team" onClick={handleNavClick}>Team</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>Contact</Nav.Link>
            </Nav>


            <Button variant="outline-light" className="ms-3" onClick={() => setShowOffcanvas(true)}>
              <img src={call} alt="call" style={{width: '1em', height: '1em'}} />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p><FaMapMarkerAlt className="me-2" /> Main Pakavenue Rd, Sahiwal, 57000, Pakistan</p>
            <p><FaEnvelope className="me-2" /> info@yourmail.com</p>
            <p><FaPhone className="me-2" /> +0123 456 7890</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MainNavbar;
