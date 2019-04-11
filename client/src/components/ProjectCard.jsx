import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectCard = props => {
    return (
        <Card>
            <Card.Img src={props.image} alt="Project detail"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard