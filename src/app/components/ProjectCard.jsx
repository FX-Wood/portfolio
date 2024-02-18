import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectCard = props => {
    return (
        <Card>
            <Card.Img src={props.images[0]} alt="Project detail"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Link 
                    href={props.github} 
                    target="_blank">
                    Source
                </Card.Link>
                <Card.Link 
                    href={props.demo.url} 
                    target="_blank">
                    {props.demo.name}
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
