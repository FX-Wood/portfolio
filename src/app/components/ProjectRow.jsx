import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap'


const ProjectRow = (props) => {
    const {
        name,
        images,
        description,
        descriptionLong,
        technologies,
        gitHub,
        demo
    } = props
    
    return (
        <Container direction="horizontal">
            <Row>
                <Col className="project-bullet-container">
                    <h2>{name}</h2>
                    <ul>
                    {descriptionLong.map((bullet, i) => <li key={i} className="project-bullet">{bullet}</li>)}
                    </ul>
                </Col>
                <Col>
                    <Carousel className="squarousel">
                        { images.map( (image, i) => (
                            <Carousel.Item key={i}>
                                <img src={image} className="squarousel-img"/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default ProjectRow
