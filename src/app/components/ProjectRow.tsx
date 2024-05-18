import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

const ProjectRow = (props) => {
  const {
    name,
    images,
    description,
    descriptionLong,
    technologies,
    github,
    demo,
  } = props;

  return (
    <Container>
      <Row>
        <Col className="project-bullet-container">
          <h2>{name}</h2>
          <p>{description}</p>
          <ul>
            {descriptionLong.map((bullet, i) => (
              <li key={i} className="project-bullet">
                {bullet}
              </li>
            ))}
          </ul>
          <span>
            {github ? (
              <a className="project-link" href={github} target="_blank">
                GitHub Repo
              </a>
            ) : null}
            <a className="project-link" href={demo.url} target="_blank">
              {demo.name}
            </a>
          </span>
          <p className="project-technologies">{technologies}</p>
        </Col>
        <Col>
          <Carousel className="squarousel" interval={null}>
            {images.map((image, i) => (
              <Carousel.Item key={i}>
                <img src={image} className="squarousel-img" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default ProjectRow;
