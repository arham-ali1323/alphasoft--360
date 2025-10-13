import { useEffect, useState } from "react";
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
          <h2 className="fw-bold text-light mb-3">
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

      <style>{`
        .testimonial-section {
          position: relative;
          overflow: hidden;
          background: #000061;
          padding: 80px 0;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 30px;
          margin: 15px;
          min-height: 340px;
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(13, 110, 253, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.2);
        }

        .testimonial-card:hover * {
          color: #ffffff !important;
        }

        .testimonial-text {
          color: #495057;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .testimonial-author {
          color: #212529;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .testimonial-role {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .slick-dots li button:before {
          color: #0d6efd;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
