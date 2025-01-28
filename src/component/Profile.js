import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Profile.css';
import proimg from "../image/pro_cut.png";

const Profile = () => {
  return (
    <Container className="profile-container">
      <Row className="align-items-center">
        <Col md={8}>
          <h2 className="profile-heading">Vedant Potdar</h2>
          <h2 className="profile-heading2">_____B.E. Computer Engineers</h2>
          <p className="profile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit consectetur dignissimos deserunt quo iste quis vel quos recusandae error non, eaque adipisci aperiam nam corporis dolorem enim unde debitis.
          </p>
          <Button variant="outline-secondary" className="profile-button">My Resume</Button>
        </Col>
        <Col md={4}>
          <Image src={proimg} roundedCircle fluid className="profile-photo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

