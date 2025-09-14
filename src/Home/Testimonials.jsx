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
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
      name: "Mariya Khan",
      role: "CEO, Brick Consulting",
      img: avatar1,
    },
    {
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal.",
      name: "Sonia Akhter",
      role: "Graphic Designer",
      img: avatar2,
    },
    {
      text: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
      name: "Deluar Hossen",
      role: "Web Developer",
      img: avatar3,
    },
     {
      text: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
      name: "Deluar Hossen",
      role: "Web Developer",
      img: avatar1,
    },
     {
      text: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
      name: "Deluar Hossen",
      role: "Web Developer",
      img: avatar2,
    },
     {
      text: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
      name: "Deluar Hossen",
      role: "Web Developer",
      img: avatar3,
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <span className="sub-text text-primary d-block mb-2">TESTIMONIAL</span>
        <h2 className="fw-bold mb-3">What AlphaSoft360 Customers Say</h2>
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
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
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