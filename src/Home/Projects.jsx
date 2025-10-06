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
      img: "https://img.freepik.com/free-photo/programmer-working-web-development-code-engineer-programming-with-c-coding-website-design-database-management_90220-248.jpg?w=1380",
      title: "Web Development",
      category: "Full Stack Solutions",
      description: "Modern web applications built with React, Node.js, and cloud infrastructure",
      link: "#"
    },
    {
      img: "https://img.freepik.com/free-photo/mobile-banking-concept-banking-technology-banner-mobile-application-interface-3d-illustration_73903-480.jpg?w=1380",
      title: "Mobile App Development",
      category: "Cross-Platform Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
      title: "Cloud Solutions",
      category: "DevOps & Infrastructure",
      description: "Scalable cloud infrastructure and DevOps automation",
      link: "#"
    },
    {
      img: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1380",
      title: "AI & Machine Learning",
      category: "Smart Solutions",
      description: "Intelligent solutions powered by advanced AI algorithms",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
      title: "Cybersecurity",
      category: "Security Solutions",
      description: "Enterprise-grade security and data protection",
      link: "#"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="rs-project py-5">
      <Container>
        <div className="sec-title2 text-center mb-5">
          <span className="sub-text gradient-text">Our Projects</span>
          <h2 className="title">
            Innovative Solutions for Digital Transformation
          </h2>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-item p-3" key={index}>
              <div className="project-img rounded overflow-hidden">
                <a href={project.link}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </a>
              </div>
              <div className="project-content text-center mt-4">
                <h3 className="title h5 mb-2">
                  <a href={project.link} className="text-dark">{project.title}</a>
                </h3>
                <span className="category text-primary d-block mb-2">
                  {project.category}
                </span>
                <p className="description text-muted small">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default ProjectSection;