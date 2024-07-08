import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Profile.css";
import proimg from "../image/pro_cut.png";

const Profile = () => {
  return (
    <Container className="profile-container">
      <Row className="align-items-center">
        <Col md={8}>
          <h2 className="profile-heading">Vedant Potdar</h2>
          <h2 className="profile-heading2">_____MERN Stack Developer</h2>
          <p className="profile-description">
            Dedicated and enthusiastic Last-year Bachelor of Computer
            Engineering student with a passion for MERN Stack development.{" "}
          </p>
          <Button 
            variant="outline-secondary" 
            className="profile-button" 
            href={`${process.env.PUBLIC_URL}/My Resume (Vedant).pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            My Resume
          </Button>
        </Col>
        <Col md={4}>
          <Image src={proimg} roundedCircle fluid className="profile-photo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
