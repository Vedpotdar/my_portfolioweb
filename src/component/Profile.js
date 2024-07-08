import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import "./Profile.css";
import proimg from "../image/pro_cut.png";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button variant="outline-secondary" className="profile-button" onClick={handleShow}>
            My Resume
          </Button>
        </Col>
        <Col md={4}>
          <Image src={proimg} roundedCircle fluid className="profile-photo" />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed src={`${process.env.PUBLIC_URL}/My Resume (Vedant).pdf`} type="application/pdf" width="100%" height="600px" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
