import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contactpage.css';
import OurnavBar from './navbar';
import Footer from './Footer';

function ContactPage() {
  return (
    <>
      <OurnavBar />
      <section id="contact" className="contact-section mt-5">
        <Container>
          <h2 className="section-title">Contact Me</h2>
          <Row>
            <Col md={6}>
              <div className="contact-form-container">
                <Form className="contact-form">
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md={6}>
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> vedantpotdar170@gmail.com</p>
                <p><strong>Phone:</strong> +91 95450 99800</p>
                <p><strong>Address:</strong> Rupeenagar, Pune, India</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
