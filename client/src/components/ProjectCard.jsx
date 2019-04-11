import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectCard = props => {
    return (
        <Card>
            <Card.Img src={props.image} alt="Project detail"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Link 
                    href={props.github} 
                    target="_blank">
                    Github
                </Card.Link>
                <Card.Link 
                    href={props.demo} 
                    target="_blank">
                    Live!
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard