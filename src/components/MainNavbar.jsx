import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/img/AlphaSoft_logo.png";

const MainNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://animatedicons.co/scripts/embed-animated-icons.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCallClick = () => {
    if (window.confirm("Do you want to call +0123 456 7890?")) {
      window.location.href = "tel:+01234567890";
    }
  };

  return (
    <>
      {/* ===== Top Info Bar ===== */}
      <div className="bg-light py-2 border-bottom">
        <Container>
          <Row className="align-items-center text-center text-lg-start gy-2">
            <Col lg={4} md={12}>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start navbar-social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>

            <Col
              lg={8}
              md={12}
              className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3"
            >
              <a
                href="/"
                className="text-decoration-none text-dark small d-flex align-items-center"
              >
                <animated-icons
                  src="https://animatedicons.co/get-icon?name=location&style=minimalistic&token=45b3e531-a5b4-4725-afdf-330d67562c0e"
                  trigger="loop"
                  attributes='{"variationThumbColour":"#000000","variationName":"Dark","variationNumber":4,"numberOfGroups":2,"strokeWidth":1.5,"backgroundIsGroup":true,"defaultColours":{"group-1":"#FFFFFFFF","group-2":"#000000","background":"#0C6AF7FF"}}'
                  height="30"
                  width="30"
                ></animated-icons>
                Main Pakavenue Road, Sahiwal, 57000, Pakistan
              </a>
              <a
                href="mailto:info@alphasoft360.com"
                className="text-decoration-none text-dark small d-flex align-items-center"
              >
                <animated-icons
                  src="https://animatedicons.co/get-icon?name=mail&style=minimalistic&token=e55f9897-402e-4453-b539-03e933b6d7fa"
                  trigger="loop"
                  attributes='{"variationThumbColour":"#000000","variationName":"Dark","variationNumber":4,"numberOfGroups":2,"strokeWidth":1.5,"backgroundIsGroup":true,"defaultColours":{"group-1":"#E6E9EC","group-2":"#000000","background":"#0C6AF7FF"}}'
                  height="40"
                  width="40"
                ></animated-icons>
                info@alphasoft360.com
              </a>
              {/* <a
                href="tel:+01234567890"
                className="text-decoration-none text-dark small d-flex align-items-center"
              >
                <FaPhone className="text-primary me-2" />
                +0123 456 7890
              </a> */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* ===== Navbar ===== */}
      <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width={120} />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <Button
            variant="outline-light"
            className="d-lg-none border-0"
            onClick={() => setShowOffcanvas(true)}
          >
            ☰
          </Button>

          {/* Desktop Menu */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="text-white">
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/FAQ" className="text-white">
              FAQs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
            <Button
              variant="outline-primary"
              className="ms-3 call-button"
              onClick={handleCallClick}
            >
              <animated-icons
                src="https://animatedicons.co/get-icon?name=Calling%20V3&style=minimalistic&token=66ff3706-138c-41fa-a993-dee03566e48c"
                trigger="loop"
                attributes='{"variationThumbColour":"#000000","variationName":"Dark","variationNumber":4,"numberOfGroups":2,"strokeWidth":0.98,"backgroundIsGroup":true,"defaultColours":{"group-1":"#E6E9EC","group-2":"#FFFFFFFF","background":"#FFFFFFFF"}}'
                height="30"
                width="30"
              ></animated-icons>
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* ===== Offcanvas Menu for Mobile ===== */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="offcanvas-navbar"
      >
        <Offcanvas.Header className="position-relative">
          <Offcanvas.Title>
            <img src={logo} alt="logo" width={100} />
          </Offcanvas.Title>
          <Button
            variant="outline-light"
            className="border-0 position-absolute top-0 end-0 mt-2 me-2"
            onClick={() => setShowOffcanvas(false)}
          >
            <FaTimes size={20} />
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link as={Link} to="/" onClick={() => setShowOffcanvas(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => setShowOffcanvas(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => setShowOffcanvas(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/NotFound"
              onClick={() => setShowOffcanvas(false)}
            >
              Pages
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/team"
              onClick={() => setShowOffcanvas(false)}
            >
              Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setShowOffcanvas(false)}
            >
              Contact
            </Nav.Link>

            <Button
              variant="outline-light"
              className="mt-4"
              onClick={handleCallClick}
            >
              <FaPhone className="me-2" /> Call Us
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MainNavbar;
