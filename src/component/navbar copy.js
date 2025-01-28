import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function OurnavBar() {
  return (
    <>
     <Navbar expand="lg" fixed="top" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Navbar.Brand href="#home">YourLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu">
            <Nav.Link href="#home" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#fff' }}>About</Nav.Link>
            <Nav.Link href="#services" style={{ color: '#fff' }}>Services</Nav.Link>
            <Nav.Link href="#portfolio" style={{ color: '#fff' }}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#fff' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default OurnavBar;
