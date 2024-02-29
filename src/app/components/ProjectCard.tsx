import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectCard = props => {
    const {
        images,
        name,
        description,
        github,
        demo,
    } = props
    return (
        <Card>
            <Card.Img src={images[0]} alt="Project detail"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                { github ? <Card.Link 
                    href={github} 
                    target="_blank">
                    Source
                </Card.Link> : null }
                <Card.Link 
                    href={demo.url} 
                    target="_blank">
                    {demo.name}
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
