import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ProjectCard = props => {
    return (
        <Carousel.Item className="Project">
            <img src={props.image} alt="Project detail"/>
            <Carousel.Caption>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default ProjectCard