import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesPage.css';
import OurnavBar from './navbar';
import Footer from './Footer';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web development using modern technologies such as React.js, Node.js, and MongoDB.',
    iconClass: 'fas fa-laptop-code',
  },
  {
    id: 2,
    title: 'Responsive Design',
    description: 'Creating responsive websites that work seamlessly across all devices and screen sizes.',
    iconClass: 'fas fa-mobile-alt',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive and user-friendly interfaces with a focus on usability and aesthetics.',
    iconClass: 'fas fa-paint-brush',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Building scalable e-commerce platforms with payment gateway integration and inventory management.',
    iconClass: 'fas fa-shopping-cart',
  }
];

function ServicesPage() {
  return (
    <>
      <OurnavBar />

      <section id="services" className="services-section py-5 mt-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Services</h2>
          <Row>
            {services.map(service => (
              <Col key={service.id} md={6} lg={3} className="mb-4">
                <div className="service-item">
                  <div className="service-icon">
                    <i className={`icon ${service.iconClass}`}></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ServicesPage;
