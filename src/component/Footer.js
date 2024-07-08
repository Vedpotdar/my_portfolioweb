

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>About Me</h5>
            <p>Passionate web developer with expertise in MERN stack. I create beautiful and functional web applications.</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:your.email@example.com">vedantpotdar170@gmail.com</a></p>
            <p>Phone: +91 95450 99800</p>
            <p>Location: Pune, India</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Vedant Potdar. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
