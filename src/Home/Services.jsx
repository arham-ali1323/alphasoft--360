// src/Services.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import service icons
import icon1 from "../assets/img/1.png";
import icon2 from "../assets/img/2.png";
import icon3 from "../assets/img/3.png";
import icon4 from "../assets/img/4.png";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";

// Data for services
const services = [
  {
    img: icon1,
    title: "Software Development",
    description:
      "Expert guidance to streamline operations, enhance efficiency, and achieve sustainable business growth through tailored strategies.",
  },
  {
    img: icon2,
    title: "Web Development",
    description:
      "Proactive risk identification, assessment, and mitigation to safeguard your business and ensure long-term stability.",
  },
  {
    img: icon3,
    title: "Analytic Solutions",
    description:
      "In-depth market analysis and insights to inform decision-making and maintain a competitive edge in your industry.",
  },
  {
    img: icon4,
    title: "Cloud & DevOps",
    description:
      "High-quality service delivery with a focus on excellence, ensuring client satisfaction and building lasting partnerships.",
  },
  {
    img: icon5,
    title: "Product & Design",
    description:
      "Scalable cloud infrastructure and migration strategies to support digital transformation and growth.",
  },
  {
    img: icon6,
    title: "Data Center",
    description:
      "Dedicated assistance around the clock to resolve issues quickly and maintain smooth operations.",
  },
];

const Services = () => {
  // Service Card Component inside the same file
  const ServiceCard = ({ image, title, description }) => (
    <div className="feature-card p-4 h-100 shadow-sm rounded text-start">
      <div className="ring-icon d-flex align-items-center mb-3">
        <img src={image} alt={title} width="50" height="50" />
      </div>
      <h5 className="fw-bold">{title}</h5>
      <p className="mb-0 mt-2">{description}</p>
    </div>
  );

  return (
    <section className="bg-white text-center my-5">
      <Container>
        {/* Section Title */}
        <Row className="justify-content-center text-center">
          <Col xs={10} md={6}>
            <small className="text-primary fw-bold">SERVICES</small>
            <h3 className="fs-2 fs-lg-3">
              AlphaSoft360 Offers All Kinds of IT Solutions Services
            </h3>
            <div className="line mx-auto"></div>
          </Col>
        </Row>

        {/* Service Cards */}
        <Row className="mt-4 mt-md-5">
          {services.map((service, index) => (
            <Col sm={6} lg={4} className="mt-4" key={index}>
              <ServiceCard
                image={service.img}
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
