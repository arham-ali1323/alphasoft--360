import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

// Avatar images (replace if needed)
import avatar1 from "../assets/img/client1.png";
import avatar2 from "../assets/img/client2.png";
import avatar3 from "../assets/img/client3.png";

const Testimonials = () => {
  const testimonials = [
    {
      text: "AlphaSoft delivered our e-commerce platform on time and exceeded expectations. Their team's expertise in modern web technologies transformed our business operations.",
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
      text: "The custom software solution AlphaSoft built for us has significantly improved our workflow efficiency. Their support team is always responsive and helpful.",
      name: "Michael Chen",
      role: "Operations Director, DataFlow Inc",
      img: avatar3,
    },
    {
      text: "AlphaSoft's expertise in cloud migration helped us scale our infrastructure seamlessly. Their strategic approach saved us both time and resources.",
      name: "Fatima Hassan",
      role: "IT Manager, GlobalTech",
      img: avatar1,
    },
    {
      text: "From concept to deployment, AlphaSoft handled our software project with professionalism. The final product was robust, scalable, and met all our requirements.",
      name: "David Kumar",
      role: "CEO, StartupHub",
      img: avatar2,
    },
    {
      text: "AlphaSoft's team provided exceptional UI/UX design and development services. Our client satisfaction has increased dramatically since launching the new platform.",
      name: "Lisa Wong",
      role: "Marketing Director, BrandBoost",
      img: avatar3,
    },
  ];

  const settings = {
   arrows: false, // 👈 Removed arrows
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <span className="text-primary d-block mb-2 fw-semibold">TESTIMONIALS</span>
        <h2 className="fw-bold mb-4">What AlphaSoft360 Customers Say</h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex flex-column align-items-center">
                <FaQuoteRight className="text-primary fs-3 mb-3" />
                <p className="text-muted mb-4">{t.text}</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h5 className="fw-bold mb-1">{t.name}</h5>
                <p className="text-secondary small mb-0">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
