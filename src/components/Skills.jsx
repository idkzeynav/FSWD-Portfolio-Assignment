import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => (
  <Container className="my-5">
    <h2 className="text-center">My Skills</h2>
    <Row>
      <Col md={6} className="my-3">
        <h5>Frontend Development</h5>
        <ul>
          <li>
            React 
            <ProgressBar now={80} label="56.75%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={80} 
                label="56.75%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            Next.js / Vite 
            <ProgressBar now={80} label="56.75%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={80} 
                label="56.75%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            HTML & CSS (Proficient) 
            <ProgressBar now={100} label="99.3%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={100} 
                label="99.3%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
        </ul>
      </Col>
      <Col md={6} className="my-3">
        <h5>Backend Development</h5>
        <ul>
          <li>
            Express.js 
            <ProgressBar now={66} label="66%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={66} 
                label="66%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            SQL Databases (2+ years experience)
            <ProgressBar now={86.3} label="86.3%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={86.3} 
                label="86.3%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
        </ul>
      </Col>
      <Col md={6} className="my-3">
        <h5>Mobile Development</h5>
        <ul>
          <li>
            Flutter 
            <ProgressBar now={73} label="73%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={73} 
                label="73%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            Firebase Integration 
            <ProgressBar now={86} label="86%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={86} 
                label="86%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
        </ul>
      </Col>
      <Col md={6} className="my-3">
        <h5>Data Analysis</h5>
        <ul>
          <li>
            Python 
            <ProgressBar now={70} label="70%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={70} 
                label="70%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            NumPy & Pandas 
            <ProgressBar now={80} label="80%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={80} 
                label="80%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
          <li>
            Power BI 
            <ProgressBar now={40} label="40%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={40} 
                label="40%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
        </ul>
      </Col>
      <Col md={6} className="my-3">
        <h5>Other Skills</h5>
        <ul>
          <li>
            API Integration 
            <ProgressBar now={63} label="63%" style={{ backgroundColor: '#e9ecef' }}>
              <ProgressBar 
                now={63} 
                label="63%" 
                style={{ backgroundColor: '#75E6DA' }} 
                animated 
              />
            </ProgressBar>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Skills;
