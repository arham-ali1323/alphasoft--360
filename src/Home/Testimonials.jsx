import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

// Random avatar images (replace with your own)
import avatar1 from "../assets/img/client1.png";
import avatar2 from "../assets/img/client2.png";
import avatar3 from "../assets/img/client3.png";

const Testimonials = () => {
  const testimonials = [
    {
      text: "AlphaSoft delivered our e-commerce platform on time and exceeded expectations. Their expertise in modern web technologies transformed our business operations.",
      name: "Ahmed Rahman",
      role: "CTO, TechStart Solutions",
      img: avatar1,
    },
    {
      text: "Working with AlphaSoft was a game-changer for our mobile app. Their attention to detail and commitment to quality resulted in a seamless user experience.",
      name: "Sara Ali",
      role: "Product Manager, InnovateCorp",
      img: avatar2,
    },
    {
      text: "The custom software solution AlphaSoft built for us improved workflow efficiency. Their support team is always responsive and helpful.",
      name: "Michael Chen",
      role: "Operations Director, DataFlow Inc",
      img: avatar3,
    },
    {
      text: "AlphaSoft's expertise in cloud migration helped us scale seamlessly. Their strategy saved time and resources while ensuring performance.",
      name: "Fatima Hassan",
      role: "IT Manager, GlobalTech",
      img: avatar1,
    },
    {
      text: "From concept to deployment, AlphaSoft handled our project with professionalism. The final product was robust, scalable, and feature-rich.",
      name: "David Kumar",
      role: "CEO, StartupHub",
      img: avatar2,
    },
    {
      text: "AlphaSoft provided exceptional UI/UX design and development. Our client satisfaction has increased dramatically since launching the new platform.",
      name: "Lisa Wong",
      role: "Marketing Director, BrandBoost",
      img: avatar3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <span className="sub-text text-primary d-block mb-2">
          TESTIMONIALS
        </span>
        <h2 className="fw-bold mb-3">What Our Clients Say</h2>
        <div className="divider mx-auto mb-5"></div>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card p-4 mx-2">
              <FaQuoteRight className="quote-icon mb-3 text-primary fs-3" />
              <p className="testimonial-text">{t.text}</p>
              <div className="client-info mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="client-img rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <h5 className="fw-bold mt-3 mb-1">{t.name}</h5>
                <p className="text-muted mb-0">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
