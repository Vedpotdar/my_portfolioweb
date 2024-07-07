import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeAboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <Row className="align-items-center">
        <Col md={12}>
          <h2 className="about-us-heading">About me</h2>
          <p className="about-us-description">
            I am an enthusiastic web developer based in New York, with a rich
            experience of over 6 years in website & product design.{" "}
          </p>
        </Col>
      </Row>
      <Row className="align-items-top">
        <Col md={5}>
          <p className="about-us-description-2">
            I design professional & beautiful websites
          </p>
        </Col>
        <Col md={7}>
          <p className="about-us-description-3">
            With years of experience in graphic and web design I have mastered
            the skills of understanding client requirements according to the
            latest trends. I have worked with businesses from different niches
            so you can rely on me for yours. I’ve spent most of these years
            working across different areas of design like front-end development,
            landing pages, email design, app UI/UX, to my current role designing
            products for mobile platforms. Having worked on various projects
            that are already live, I can help you with the best possible
            suggestions and ideas that we can proceed with. With me, you aren’t
            forced to accept anything. I give you a variety of options we can
            work on together.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
