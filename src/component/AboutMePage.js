import React, { useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './AboutMePage.css';
import OurnavBar from './navbar';
import Footer from './Footer';
import aboutimg from '../image/sample_back3.jpg';

function AboutMePage() {
  useEffect(() => {
    const aboutInfo = document.querySelector('.about-info');
    const aboutPhoto = document.querySelector('.about-photo');
    const skillsSection = document.querySelector('.skills-section');
    const educationSection = document.querySelector('.education-section');

    aboutInfo.classList.add('animate-slideInLeft');
    aboutPhoto.classList.add('animate-slideInRight');
    skillsSection.classList.add('animate-fadeIn');
    educationSection.classList.add('animate-fadeIn');
  }, []);

  return (
    <>
      <OurnavBar />
      <section id="about" className="about-section mt-5">
        <Container>
          <h2 className="section-title">About Me</h2>
          <Row>
            <Col md={6} className="about-info">
              <h3>Information</h3>
              <p>Passionate web developer with expertise in the MERN stack. I create beautiful and functional web applications with a focus on user experience and performance.</p>
              <ul>
                <li><strong>Full Name:</strong> Vedant Bhauso Potdar</li>
                <li><strong>Birth Date:</strong> February 19, 2003</li>
                <li><strong>Email:</strong> vedantpotdar170@gmail.com</li>
                <li><strong>Phone:</strong> +91 95450 99800</li>
                <li><strong>Location:</strong> Pune, India</li>
              </ul>
            </Col>
            <Col md={6} className="about-photo">
              <img src={aboutimg} alt="Vedant Bhauso Potdar" className="img-fluid rounded-circle" />
            </Col>
          </Row>
          <Row className="skills-section">
            <Col>
              <h3>Skills</h3>
              <div className="skills">
                <div className="skill">
                  <h4>HTML</h4>
                  <ProgressBar now={90} label={`${90}%`} />
                </div>
                <div className="skill">
                  <h4>CSS</h4>
                  <ProgressBar now={85} label={`${85}%`} />
                </div>
                <div className="skill">
                  <h4>JavaScript</h4>
                  <ProgressBar now={80} label={`${80}%`} />
                </div>
                <div className="skill">
                  <h4>React</h4>
                  <ProgressBar now={75} label={`${75}%`} />
                </div>
                <div className="skill">
                  <h4>Node.js</h4>
                  <ProgressBar now={70} label={`${70}%`} />
                </div>
                <div className="skill">
                  <h4>MongoDB</h4>
                  <ProgressBar now={65} label={`${65}%`} />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="education-section">
            <Col>
              <h3>Education</h3>
              <ul className="education-list">
                <li>
                  <h4>Diploma in Computer Engineering</h4>
                  <p>Maharashtra State Board of Technical Education, 2020 - 2022</p>
                </li>
                <li>
                  <h4>Bachelor in Computer Engineering</h4>
                  <p>Mumbai University, 2023 - 2025</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default AboutMePage;
