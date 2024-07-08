import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LOGO from '../image/profile-pic.png';
import './navbar.css';

function OurnavBar() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="home"><img src={LOGO} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu">
              <Nav.Link className='item' href="home">Home</Nav.Link>
              <Nav.Link className='item' href="about">About</Nav.Link>
              <Nav.Link className='item' href="services">Services</Nav.Link>
              <Nav.Link className='item' href="portfolio">Portfolio</Nav.Link>
              <Nav.Link className='item' href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OurnavBar;
