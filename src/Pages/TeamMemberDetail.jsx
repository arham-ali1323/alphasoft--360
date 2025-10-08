import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaArrowLeft } from 'react-icons/fa';
import teamMembers from '../Team/teamData';
import ngbng from '../assets/img/ngbng.png';
import '../Team/Team.css';

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="container text-center" style={{ padding: '80px 0' }}>
        <h2>Team Member Not Found</h2>
        <Link to="/team" className="btn btn-primary">Back to Team</Link>
      </div>
    );
  }

  return (
    <div className="team-member-detail" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="team-detail-card bg-white p-5 rounded shadow">
              <Link to="/team" className="btn btn-outline-primary mb-4">
                <FaArrowLeft className="me-2" /> Back to Team
              </Link>
              <div className="text-center">
                <div
                  className="team-img-wrapper mb-4"
                  style={{
                    width: '300px',
                    height: '300px',
                    margin: '0 auto',
                    backgroundImage: `url(${ngbng})`
                  }}
                >
                  <img src={member.image} alt={member.name} className="team-img" style={{ width: '250px', height: '250px' }} />
                </div>
                <h1 className="team-name mb-2">{member.name}</h1>
                <p className="team-role mb-4" style={{ fontSize: '1.25rem', color: '#007bff' }}>{member.role}</p>
                <p className="team-bio mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#6c757d' }}>
                  {member.bio}
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
