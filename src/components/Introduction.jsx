import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../assets/profile-pic.jpg';

const Introduction = () => (
  <Container fluid className="text-center p-0" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
    <Row noGutters className="d-flex justify-content-center align-items-center" style={{ paddingTop: '3rem' }}>
      <Col md={5} className="mx-auto">
        <Image
          src={profilePic}
          roundedCircle
          fluid
          style={{ maxWidth: '150px', height: 'auto', borderRadius: '50%', verticalAlign: 'middle', border: '5px solid #00bcd4', marginBottom: '1rem' }}
        />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: '1rem' }}>
      <Col md={8} className="text-center">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#189AB4', marginBottom: '1rem' }}>Hello, I'm idkzeynav</h1>
        <p style={{ fontSize: '1.2rem', color: '#004d40', lineHeight: '1.5', marginTop: '1rem' }}>
          Currently a CS enrolled undergraduate with a developer's mind and an artist's soul. I'm fascinated by the magic that happens when UI and code come together to create truly interactive experiences.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Introduction;
