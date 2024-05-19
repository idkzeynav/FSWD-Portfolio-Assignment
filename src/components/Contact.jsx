import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container className="my-5">
    <h2 className="text-center">Contact Me</h2>
    <Row>
      <Col md={6} className="mx-auto">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>

          {/* Add margin-bottom to the Form.Group for spacing */}
          <Form.Group style={{ marginBottom: '1rem' }}> {/* Adjust margin as needed */}
            <Button variant="primary" type="submit" style={{ backgroundColor: '#024950', transition: 'background-color 0.2s ease-in-out to #003125' }}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
    <Row className="text-center my-3">
      <Col>
        <a href="https://github.com/idkzeynav" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" style={{ marginRight: '10px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/zainab-hasan-6533862bb/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </Col>
    </Row>
  </Container>
);

export default Contact;
