import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';

function Projects() {
  return (
    <section className="project" id="projects">
      <Container className="project-bx">
        <h2>Projects</h2>
        <p>
          To leverage my expertise in HTML, CSS, and JavaScript alongside my
          proficiency in modern frontend frameworks to create engaging and
          intuitive user experiences. Seeking opportunities to contribute to
          innovative projects while continually expanding my skill set and
          staying ahead of industry trends.
        </p>
        <Row>
          <Col>
            <a href="https://meghamadhu7.github.io/Godaddy/">
              <img
                src={projImg1}
                alt="Broken Image"
                width="320px"
                height="200px"
              />
            </a>
            <br />
            <br />
            <a
              href=" https://meghamadhu7.github.io/Godaddy/"
              className="proj1"
            >
              <h5>GO Daddy</h5>
            </a>
          </Col>
          <Col>
            <a href= "https://meghamadhu7.github.io/Portfolio/">
              <img
                src={projImg2}
                alt="Broken Image"
                width="320px"
                height="200px"
              />
            </a>
            <br />
            <br />
            <a
              href="https://meghamadhu7.github.io/Portfolio/"
              className="proj2"
            >
              <h5>Portfolio</h5>
            </a>
          </Col>
          <Col>
            <a href="https://meghamadhu7.github.io/Bookmovie/">
              <img
                src={projImg3}
                alt="Broken Image"
                width="320px"
                height="200px"
              />
            </a>
            <br />
            <br />
            <a
              href="https://meghamadhu7.github.io/Bookmovie/"
              className="proj3"
            >
              <h5>BookMyShow</h5>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
