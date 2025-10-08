import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import teamMembers from "../Team/teamData";
import "../Team/Team.css";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="container text-center py-5">
        <h2>Team Member Not Found</h2>
        <Link to="/team" className="btn btn-primary mt-3">
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="team-member-detail bg-light">
      {/* ===== Hero Section ===== */}
      <section
        className="team-hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${member.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold">{member.name}</h1>
          <p>
            <Link to="/" className="text-white text-decoration-none">
              Home
            </Link>{" "}
            / Team / {member.name}
          </p>
        </div>
      </section>

      {/* ===== Member Info Section ===== */}
      <section className="container py-5">
        <Link to="/team" className="btn btn-outline-primary mb-4">
          <FaArrowLeft className="me-2" /> Back to Team
        </Link>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <h3 className="text-primary text-uppercase">{member.position}</h3>
            <h2 className="fw-bold mb-3">{member.name}</h2>
            <p className="text-muted mb-3" style={{ fontSize: "1.1rem" }}>
              {member.description}
            </p>

            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="me-2 text-primary" />
              <span>{member.email}</span>
            </div>
            <div className="d-flex align-items-center mb-4">
              <FaPhone className="me-2 text-primary" />
              <span>{member.phone}</span>
            </div>

            <div className="d-flex gap-3">
              {member.socials.facebook && (
                <a href={member.socials.facebook} target="_blank" rel="noreferrer" className="text-dark">
                  <FaFacebookF />
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="text-dark">
                  <FaInstagram />
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="text-dark">
                  <FaTwitter />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="text-dark">
                  <FaLinkedinIn />
                </a>
              )}
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noreferrer" className="text-dark">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Biography + Skills Section ===== */}
      <section className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Biography</h3>
            <p className="text-muted">{member.biography}</p>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Professional Skills</h3>
            {member.skills && member.skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(90deg, #0d6efd, #0b5ed7)",
        }}
      >
        <h2 className="fw-bold mb-3">
          Grow Your Business and Build Your Website or Software With Us.
        </h2>
        <Link to="/contact" className="btn btn-light fw-semibold px-4 py-2">
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default TeamMemberDetail;
