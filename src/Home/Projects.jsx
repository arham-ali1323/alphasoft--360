import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Project Section Component
const ProjectSection = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Product Design",
      category: "IT Technology",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Product Engineering",
      category: "IT Technology",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Analytic Solutions",
      category: "IT Technology",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Growth Strategies",
      category: "IT Technology",
      link: "#"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="rs-project">
      <Container>
        <div className="sec-title2 text-center mb-45">
          <span className="sub-text white-color">Project</span>
          <h2 className="title white-color">
            AlphaSoft360 Offers All Kinds of IT Solutions Services
          </h2>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-img">
                <a href={project.link}>
                  <img src={project.img} alt={project.title} />
                </a>
              </div>
              <div className="project-content">
                <h3 className="title">
                  <a href={project.link}>{project.title}</a>
                </h3>
                <span className="category">
                  <a href={project.link}>{project.category}</a>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
<div
  className="col-12 py-5 bg-white"
  style={{ marginTop: -100 }}
></div>

    </section>
  );
};

export default ProjectSection;