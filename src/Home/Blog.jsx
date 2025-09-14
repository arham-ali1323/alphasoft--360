import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your placeholder images
import blogImage1 from '../assets/img/6.jpg'; // Adjust path as needed
import blogImage2 from '../assets/img/7.jpg'; // Adjust path as needed
import blogImage3 from '../assets/img/8.jpg'; // Adjust path as needed

// A simple component for a blog post card
const BlogCard = ({ image, date, author, title, text, category }) => {
  return (
    <Card className="blog-card shadow-sm border-0">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={image} className="card-image" />
        <a className="btn image-category-tag">{category}</a>
      </div>
      <Card.Body>
        <div className="card-meta d-flex justify-content-between mb-2">
          <span className="meta-item text-muted"><i className="far fa-calendar-alt me-1"></i> {date}</span>
          <span className="meta-item text-muted"><i className="far fa-user me-1"></i> {author}</span>
        </div>
        <Card.Title as="h5" className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-secondary">{text}</Card.Text>
      </Card.Body>
    </Card>

  );
};

// Main component for the section
const BlogSection = () => {
  const blogPosts = [
    {
      image: blogImage1,
      date: "28 December 2020",
      author: "admin",
      title: "Tech Firms Support Huawei Restriction, Balk at Cost",
      text: "We denounce with righteous indignation and dislike men who are so beguiled...",
      category: "Digital Technology",
    },
    {
      image: blogImage2,
      date: "30 December 2020",
      author: "admin",
      title: "Servo Project Joins The Linux Foundation Fold Desco",
      text: "We denounce with righteous indignation and dislike men who are so beguiled...",
      category: "IT Services",
    },
    {
      image: blogImage3,
      date: "16 Nov 2020",
      author: "admin",
      title: "Necessity May Give Us Your Best Virtual Court System",
      text: "We denounce with righteous indignation and dislike men who are so beguiled...",
      category: "Software Development",
    },
  ];

  // We are using a style tag to keep CSS local to this file.
  const css = `
    /* --- Blog Section General Styling --- */
    
  `;

  return (
    <>
      <style>{css}</style>
      <div className="blog-section">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold text-uppercase mb-1">BLOGS</p>
            <h2 className="fw-bold display-5">Read Our Latest Tips & Tricks</h2>
          </div>
          <Row className="g-4">
            {blogPosts.map((post, index) => (
              <Col md={6} lg={4} key={index}>
                <BlogCard {...post} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogSection;