// src/components/TeamSliderSection.js
import React from "react";
import Slider from "react-slick";
import Person1 from "../assets/img/client1.png";
import Person2 from "../assets/img/client2.png";
import Person3 from "../assets/img/client3.png";
import Person4 from "../assets/img/CEo.jpeg";

const teamMembers = [
  {
    image: Person1,
    name: "Isabella Croline",
    role: "Project Manager",
  },
  {
    image: Person2,
    name: "Jullia Siger",
    role: "Product Designer",
  },
  {
    image: Person3,
    name: "Corey Anderson",
    role: "President & CEO",
  },
  {
    image: Person4,
    name: "Jane Doe",
    role: "Lead Developer",
  },
];

const TeamSliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // sm & xs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="team-slider-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p>Our Team</p>
          <h2 className="section-heading">Meet With IT Experts</h2>
        </div>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-3">
              <div className="team-member-card text-center">
                <div className="team-image-wrapper mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded-circle team-image"
                  />
                  <div className="bg-shape-1"></div>
                  <div className="bg-shape-2"></div>
                </div>
                <h5 className="member-name mt-4">{member.name}</h5>
                <p className="member-role">{member.role}</p>
                <div className="social-links d-flex justify-content-center mt-3">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSliderSection;
