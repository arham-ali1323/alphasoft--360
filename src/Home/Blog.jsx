import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = ({ image, date, author, title, text, category }) => {
  return (
    <Card className="blog-card h-100 shadow-sm border-0 overflow-hidden">
      <div className="card-image-wrapper position-relative">
        <Card.Img 
          variant="top" 
          src={image} 
          className="card-image"
          style={{ height: '240px', objectFit: 'cover' }}
        />
        <span className="category-badge">{category}</span>
      </div>
      <Card.Body>
        <div className="card-meta d-flex justify-content-between mb-3">
          <span className="meta-item text-muted small">
            <i className="far fa-calendar-alt me-2"></i> {date}
          </span>
          <span className="meta-item text-muted small">
            <i className="far fa-user me-2"></i> {author}
          </span>
        </div>
        <Card.Title as="h5" className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-secondary">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?w=1380&t=st=1695435001~exp=1695435601~hmac=0545a67ab1cf9b3bf3b3d121c3550d611fc94c11c3f11432143f9f909b88c028",
      date: "15 March 2024",
      author: "AlphaSoft Team",
      title: "The Future of React Development: Best Practices for 2024",
      text: "Discover the latest trends and techniques in React development that will help you build more efficient and scalable web applications...",
      category: "Web Development"
    },
    {
      image: "https://img.freepik.com/free-photo/cloud-technology-with-futuristic-pattern-background_53876-124634.jpg?w=1380&t=st=1695435047~exp=1695435647~hmac=2f923d927a9d27bc695509453368654656d3b79977739424ec3505c5c884c8b3",
      date: "22 March 2024",
      author: "AlphaSoft Team",
      title: "Cloud Migration Strategies: Moving Your Business to the Cloud",
      text: "Learn about effective strategies for migrating your existing applications to cloud platforms while minimizing downtime and maximizing performance...",
      category: "Cloud Computing"
    },
    {
      image: "https://img.freepik.com/free-photo/mobile-banking-concept-banking-technology-banner-mobile-application-interface-3d-illustration_73903-480.jpg?w=1380&t=st=1695435089~exp=1695435689~hmac=b86fc4f047c97b6beaffe89ca093480003c22ce21e892e2f40814e8cad45b5c9",
      date: "28 March 2024",
      author: "AlphaSoft Team",
      title: "Mobile App Security: Protecting Your Users in a Digital World",
      text: "Explore essential security measures and best practices for developing secure mobile applications that protect user data and privacy...",
      category: "Mobile Development"
    }
  ];

  return (
    <section className="blog-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold text-uppercase mb-2 d-block">Latest Articles</span>
          <h2 className="fw-bold mb-4">Insights & Technology Updates</h2>
          <p className="text-muted">Stay updated with the latest trends in technology and software development</p>
        </div>
        <Row className="g-4">
          {blogPosts.map((post, index) => (
            <Col md={6} lg={4} key={index}>
              <BlogCard {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;