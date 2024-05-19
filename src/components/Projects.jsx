import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import pantryPowerImage from '../assets/Power-pantry.jpg'; 
import bibliobuddies from '../assets/biblio-buddies.jpg';
import tamkeen from '../assets/tamkeen.jpg';

const projects = [
  { image: pantryPowerImage, title: 'Pantry Power', description: 'Unleash your inner chef! Find recipes that use the ingredients you already have. Reduce food waste and discover delicious meals with Pantry Power.' },
  { image: bibliobuddies, title: 'Biblo Buddies', description: 'Connect with book lovers near you! Share, borrow, buy, and sell used books with Biblio Buddies. Find your next great read and build a community of fellow bibliophiles.' },
  { image: tamkeen , title: 'Tamkeen ', description: 'Empowering women to reach their full potential. Tamkeen connects women with job opportunities and resources to help them thrive in their careers.' },
];

const Projects = () => (
  <Container className="my-5">
    <h2 className="text-center">My Projects</h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index} className="my-3">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
