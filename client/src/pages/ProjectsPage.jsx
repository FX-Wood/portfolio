import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
// mobile
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from '../components/ProjectCard';

// desktop
import Carousel from 'react-bootstrap/Carousel';
// see slide function below

// project images
import dombleImg from '../img/kingdom-select.png';
import extraImg from '../img/create-cards.png';
import propsImg from '../img/props-login.png';


var projects = [
    {
        name: "Domblenon",
        image: dombleImg,
        description: "Dominion implementation",
        descriptionLong: "Simple implementation of the deck-building game Dominion.",
        technologies: "Express.js, ES6 classes, Google Charts",
    },
    {
        name: "Extra",
        image: extraImg,
        description: "Flash cards as a service",
        descriptionLong: "Platform where folks can make and review flash cards to help with whatever they are studying",
        technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Heroku"
    },
    {
        name: "Props",
        image: propsImg,
        description: "Workplace engagement tool",
        descriptionLong: "A platform for employees to communicate and give their respects to each other",
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, reCharts"
    },
    {
        name: "Tic-Tac-Toe",
        image: 'https://via.placeholder.com/300',
        description: "Implementing an old classic",
        descriptionLong: "Clean implementation of Tic-Tac-Toe with multiplayer, random AI and optimal AI",
        technologies: 'Javascript, shuffle algorithm, min-max algorithm',
    }
]

const slide = project => (
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={project.image}
            alt="Third slide"
        />
        <Carousel.Caption>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        </Carousel.Caption>
    </Carousel.Item>
)

class ProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: true
        }
    }
    render() {
        let content;
        if (this.state.mobile === true) {
            content = (
                // mobile content 
                <CardDeck>
                    {projects.map(project => <ProjectCard {...project}/>)}
                </CardDeck>
            )
        } else {
            content = (
                // desktop content
                <Carousel>
                    {projects.map(slide)}
                </Carousel>
            )
        }
        if (!content) {
            content = <p>There was an error</p>
        }
        return (
                <div className="ProjectPage page">
                    <Nav />
                    <div className="content">
                        <Container>
                            {content}
                        </Container>
                    </div>
                </div>
        )
    }
}

export default ProjectsPage