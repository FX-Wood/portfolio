"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <main className="about-main">
      <Container>
        <Row>
          <Col className="about-photo-col">
            <img
              src={"/img/profile-photo.png"}
              className="about-photo"
              alt="FX speaking in front of a TV, looks like a presentation"
            />
          </Col>
          <Col>
            <h2>About Me</h2>
            <p>
              Hi, I'm FX Wood, I'm a nerd, and arguably a computer nerd. If
              you've gotten this far, you should hire me!
            </p>
            <p>
              I have a few years of experience in
              infrastructure/support/SRE/DevOps, and I'm coming back from a
              career break.
            </p>
            <p>
              My interests outside of work are many and varied, but include
              reading, cooking, working out, chainsawing, gaming, computing,
              skiing, travel, and much more.
            </p>
            <p>
              Get <a href="/contact">in touch!</a>
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AboutPage;
