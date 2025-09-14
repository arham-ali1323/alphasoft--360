// src/components/TeamSection.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import ngbng from "../assets/img/ngbng.png";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1600",
    name: "Pull Maradona",
    role: "President & CEO",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1600",
    name: "Rohit Pande",
    role: "Chief Technology Officer",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1600",
    name: "Makhaia Antitni",
    role: "Head of Marketing",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1600",
    name: "James Carter",
    role: "Project Manager",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600",
    name: "Sophia Turner",
    role: "UI/UX Designer",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1600",
    name: "David Khan",
    role: "Software Engineer",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1600",
    name: "Emily Stone",
    role: "Business Analyst",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1600",
    name: "Michael Brown",
    role: "QA Lead",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1600",
    name: "Isabella Rossi",
    role: "Content Strategist",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];


const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center">
                <div
                  className="team-img-wrapper"
                  style={{ backgroundImage: `url(${ngbng})` }}
                >
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>

                {/* Social Links */}
                <div className="social-links">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
