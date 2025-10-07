import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive control with media queries
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const projects = [
    {
      img: "https://img.freepik.com/free-photo/programmer-working-web-development-code-engineer-programming-with-c-coding-website-design-database-management_90220-248.jpg?w=1380",
      title: "Web Development",
      category: "Full Stack Solutions",
      description:
        "Modern web applications built with React, Node.js, and scalable cloud infrastructure.",
    },
    {
      img: "https://img.freepik.com/free-photo/mobile-banking-concept-banking-technology-banner-mobile-application-interface-3d-illustration_73903-480.jpg?w=1380",
      title: "Mobile App Development",
      category: "Cross-Platform Apps",
      description:
        "Native and hybrid mobile apps for iOS and Android with sleek UI/UX design.",
    },
    {
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
      title: "Cloud Solutions",
      category: "DevOps & Infrastructure",
      description:
        "Secure and scalable cloud infrastructure powered by modern DevOps tools.",
    },
    {
      img: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1380",
      title: "AI & Machine Learning",
      category: "Smart Solutions",
      description:
        "Empowering automation and analytics using advanced machine learning algorithms.",
    },
    {
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
      title: "Cybersecurity",
      category: "Security Solutions",
      description:
        "Enterprise-level protection with robust data encryption and security monitoring.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="project-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Our Latest Projects</h2>
          <p className="text-light small">
            Empowering businesses through technology innovation
          </p>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="project-card bg-white rounded shadow-sm overflow-hidden">
                <div className="project-img-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid w-100"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="text-primary small mb-1">{project.category}</p>
                  <p className="text-muted small">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>

      <style jsx>{`
        .project-section {
          background: linear-gradient(180deg, #0a1a66, #00113d);
        }

        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .slick-dots li button:before {
          color: #fff !important;
          font-size: 10px;
        }

        @media (max-width: 992px) {
          .project-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .project-section h2 {
            font-size: 1.6rem;
          }
          .project-card img {
            height: 200px;
          }
        }

        @media (max-width: 576px) {
          .project-section h2 {
            font-size: 1.4rem;
          }
          .project-card img {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
