import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";

// Avatar images
import avatar1 from "../assets/img/client1.png";
import avatar2 from "../assets/img/client2.png";
import avatar3 from "../assets/img/client3.png";

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slide control using media queries
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const testimonials = [
    {
      text: "AlphaSoft delivered our e-commerce platform on time and exceeded expectations. Their expertise in modern web technologies transformed our business operations.",
      name: "Ahmed Rahman",
      role: "CTO, TechStart Solutions",
      img: avatar1,
    },
    {
      text: "Working with AlphaSoft was a game-changer for our mobile app development. Their attention to detail and commitment to quality resulted in a seamless user experience.",
      name: "Sara Ali",
      role: "Product Manager, InnovateCorp",
      img: avatar2,
    },
    {
      text: "The custom software solution AlphaSoft built for us significantly improved workflow efficiency. Their support team is always responsive and helpful.",
      name: "Michael Chen",
      role: "Operations Director, DataFlow Inc",
      img: avatar3,
    },
    {
      text: "AlphaSoft's expertise in cloud migration helped us scale seamlessly. Their strategic approach saved us time and resources.",
      name: "Fatima Hassan",
      role: "IT Manager, GlobalTech",
      img: avatar1,
    },
    {
      text: "From concept to deployment, AlphaSoft handled our software project with professionalism. The final product was robust, scalable, and met all requirements.",
      name: "David Kumar",
      role: "CEO, StartupHub",
      img: avatar2,
    },
    {
      text: "AlphaSoft's team provided exceptional UI/UX design and development services. Our client satisfaction increased dramatically since launching the new platform.",
      name: "Lisa Wong",
      role: "Marketing Director, BrandBoost",
      img: avatar3,
     },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
  };

  return (
    <section className="testimonial-section py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold d-block mb-2">TESTIMONIALS</span>
          <h2 className="fw-bold text-dark mb-3">
            What Our Clients Say About AlphaSoft360
          </h2>
          </div>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="testimonial-card bg-white text-center p-4 rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-between">
                <FaQuoteRight className="text-primary fs-2 mb-3" />
                <p className="text-muted mb-4">{t.text}</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <h5 className="fw-bold mb-1">{t.name}</h5>
                <p className="text-secondary small mb-0">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>

      <style jsx>{`
              .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 340px;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .slick-dots li button:before {
          color: #ffffff !important;
          font-size: 10px;
        }

        @media (max-width: 992px) {
          .testimonial-card {
            min-height: 320px;
          }
          .testimonial-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            min-height: 300px;
          }
          .testimonial-section h2 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 576px) {
          .testimonial-card {
            min-height: 280px;
          }
          .testimonial-section h2 {
            font-size: 1.4rem;
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
