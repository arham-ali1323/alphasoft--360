// src/components/TeamSection.js
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ngbng from "../assets/img/ngbng.png";
import teamMembers from "./teamData";


const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col col-lg-4 col-md-6 mb-4">
              <Link to={`/team/${member.id}`} className="team-card-link">
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
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <FaGithub />
                    </a>
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
