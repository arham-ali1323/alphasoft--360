import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your placeholder images
import blogImage1 from '../assets/img/9.jpg'; // Adjust path as needed
import blogImage2 from '../assets/img/10.jpg'; // Adjust path as needed
import blogImage3 from '../assets/img/11.jpg'; // Adjust path as needed

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
      date: "15 March 2024",
      author: "AlphaSoft Team",
      title: "The Future of React Development: Best Practices for 2024",
      text: "Discover the latest trends and techniques in React development that will help you build more efficient and scalable web applications...",
      category: "Web Development",
    },
    {
      image: blogImage2,
      date: "22 March 2024",
      author: "AlphaSoft Team",
      title: "Cloud Migration Strategies: Moving Your Business to the Cloud",
      text: "Learn about effective strategies for migrating your existing applications to cloud platforms while minimizing downtime and maximizing performance...",
      category: "Cloud Computing",
    },
    {
      image: blogImage3,
      date: "28 March 2024",
      author: "AlphaSoft Team",
      title: "Mobile App Security: Protecting Your Users in a Digital World",
      text: "Explore essential security measures and best practices for developing secure mobile applications that protect user data and privacy...",
      category: "Mobile Development",
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