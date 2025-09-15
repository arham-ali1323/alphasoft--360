import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FaQForm = () => {
  return (
    <section className=" py-5 bg-light">
      <Container>
        <Row className=" Faq-Form justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-4">
            <h6
  className="text-primary text-center text-uppercase fw-semibold mx-auto mb-3 p-2"
  style={{ width: "fit-content", }}
>
  Contact
</h6>

              <h2 className="fw-bold">Request A Free Consultation</h2>
            </div>

            <Form className="p-4 rounded shadow-sm">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="form-control-lg rounded-3"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="E-Mail"
                    className="form-control-lg rounded-3"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="form-control-lg rounded-3"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Website"
                    className="form-control-lg rounded-3"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message Here"
                  className="form-control-lg rounded-3"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  className="btn btn-primary btn-lg px-5 rounded-3 submit-btn"
                >
                  Submit Now
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaQForm;
