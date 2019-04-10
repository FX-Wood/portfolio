import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectCard = props => {
    return (
        <Card>
            <Card.Img src={props.image} alt="Project detail"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <p>{props.description}</p>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard