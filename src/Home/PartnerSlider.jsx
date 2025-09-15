// src/components/PartnerSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Existing icons
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiPhp,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiGithub,
  SiWordpress,
  SiLaravel,
  SiSymfony,
  SiNextdotjs,
  SiAngular,
  SiReact
} from "react-icons/si";

const partners = [
  { id: 1, Icon: DiHtml5, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, Icon: DiCss3, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, Icon: DiJsBadge, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 4, Icon: DiReact, name: "React", link: "https://react.dev/" },
  { id: 5, Icon: DiBootstrap, name: "Bootstrap", link: "https://getbootstrap.com/" },
  { id: 6, Icon: SiTailwindcss, name: "TailwindCSS", link: "https://tailwindcss.com/" },
  { id: 7, Icon: DiNodejs, name: "Node.js", link: "https://nodejs.org/" },
  { id: 8, Icon: SiGithub, name: "GitHub", link: "https://github.com/" },
  { id: 9, Icon: SiWordpress, name: "WordPress", link: "https://wordpress.org/" },
  { id: 10, Icon: DiPhp, name: "PHP", link: "https://www.php.net/" },
  { id: 11, Icon: SiLaravel, name: "Laravel", link: "https://laravel.com/" },
  { id: 12, Icon: SiSymfony, name: "Symfony", link: "https://symfony.com/" },
  { id: 13, Icon: SiNextdotjs, name: "Next.js", link: "https://nextjs.org/" },
  { id: 14, Icon: SiAngular, name: "Angular", link: "https://angular.io/" },
];

const PartnerSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="rs-partner pt-80 pb-70">
      <div className="container">
        <Slider {...settings}>
          {partners.map(({ id, Icon, name, link }) => (
            <div className="partner-item" key={id}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="logo-icon"
                aria-label={name}
              >
                <Icon size={80} title={`${name} logo`} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSlider;
