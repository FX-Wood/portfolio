import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const imageStyle = {
    width: '80vw',
    height: 300
}

const ProjectSlide = props => {
    console.log(props.image)
    return (
        <>
        {/* <img src={props.image} alt=""/> */}
            <Carousel.Item>
                {/* <img style={imageStyle} src='https://via.placeholder.com/300' alt="Project detail"/> */}
                <Image
                    className="d-block w-100"
                    src={props.image}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </>
    )
}

export default ProjectSlide