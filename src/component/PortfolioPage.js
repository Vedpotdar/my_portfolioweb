import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PortfolioPage.css';
import OurnavBar from './navbar';
import Footer from './Footer';
import project1Img from '../image/sample.jpg';
import project2Img from '../image/sample.jpg';
import project3Img from '../image/sample.jpg';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non felis sed.',
    image: project1Img,
    githubLink: 'https://github.com/example/project1',
    liveDemoLink: 'https://www.example.com/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non felis sed.',
    image: project2Img,
    githubLink: 'https://github.com/example/project2',
    liveDemoLink: 'https://www.example.com/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non felis sed.',
    image: project3Img,
    githubLink: 'https://github.com/Vedpotdar',
    liveDemoLink: 'https://vedpotdar.github.io/my_portfolioweb/'
  }
];

function PortfolioPage() {
  return (
    <>
      <OurnavBar />
      <section id="portfolio" className="portfolio-section mt-5" >
        <Container>
          <h2 className="section-title">Portfolio</h2>
          <Row>
            {projects.map(project => (
              <Col key={project.id} lg={4} md={6} className="mb-4">
                <Card className="project-card">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="button-group">
                      <Button variant="primary" href={project.githubLink} target="_blank" className="mr-2">GitHub</Button>
                      <Button variant="outline-primary" href={project.liveDemoLink} target="_blank">Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default PortfolioPage;
