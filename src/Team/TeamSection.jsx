import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import ngbng from "../assets/img/ngbng.png";

import CEo from "../assets/img/portrait-5.jpg";
import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";
import portrait1 from "../assets/img/portrait-1.jpg";
import portrait2 from "../assets/img/portrait-3.jpg";
import portrait3 from "../assets/img/portrait-4.jpg";
import portrait4 from "../assets/img/portrait-5.jpg";
import portrait5 from "../assets/img/portrait-6.jpg";

const teamMembers = [
  {
    image: CEo,
    name: "Pull Maradona",
    role: "President & CEO",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: person1,
    name: "Rohit Pande",
    role: "Chief Technology Officer",
     socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: person2,
    name: "Makhaia Antitni",
    role: "Head of Marketing",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: person3,
    name: "James Carter",
    role: "Project Manager",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: portrait1,
    name: "Sophia Turner",
    role: "UI/UX Designer",
  socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: portrait2,
    name: "David Khan",
    role: "Software Engineer",
     socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: portrait3,
    name: "Emily Stone",
    role: "Business Analyst",
     socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: portrait4,
    name: "Michael Brown",
    role: "QA Lead",
     socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    image: portrait5,
    name: "Isabella Rossi",
    role: "Content Strategist",
     socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];


const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col col-lg-4 col-md-6 mb-4">
              <Link to={`/team/${member.id}`} className="team-card-link">
                <div className="team-card text-center">
                  <div
                    className="team-img-wrapper"
                    style={{ backgroundImage: `url(${ngbng})` }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-img"
                    />
                  </div>
                  <h5 className="team-name">{member.name}</h5>
                  <p className="team-role">{member.role}</p>

                  {/* Social Links */}
                  <div className="social-links">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {member.socials.stackoverflow && (
                      <a
                        href={member.socials.stackoverflow}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <FaStackOverflow />
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
