import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
import reactGA from 'react-ga';
// mobile
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import ProjectCard from '../components/ProjectCard';

// desktop
import Carousel from 'react-bootstrap/Carousel';
// see slide function below

// project images
import dombleImg from '../img/kingdom-select.png';
import extraImg from '../img/create-cards.png';
import propsImg from '../img/props-login.png';
import toeImg from '../img/tic-tac-toe.png';
import mrImg from '../img/mr-splash.png';
import diceImg from '../img/dicemagic-beyond.png';


var projects = [
    {
        name: "Dicemagic.beyond",
        image: diceImg,
        description: 'dice rolling web extension for tabletop games',
        descriptionLong: '',
        technologies: 'chrome/firefox browser apis, js classes, event listeners, mutation observers',
        github: 'https://www.github.com/fx-wood/dicemagic.beyond',
        demo: {name: "Chrome Store", url: 'https://chrome.google.com/webstore/detail/dicemagicbeyond/jdiefafcjohmkpnbgednhedeghbbgmbe'},

    },
    {
        name: "Domblenon",
        image: dombleImg,
        description: "Simple Dominion set",
        descriptionLong: "Simple implementation of the deck-building game Dominion.",
        technologies: "Express.js, ES6 classes, Google Charts",
        github: "https://www.github.com/fx-wood/Domblenon",
        demo: {name: "Github Pages", url:"https://fx-wood.github.io/DombleHost/"}
    },
    {
        name: "Extra",
        image: extraImg,
        description: "Flash cards as a service",
        descriptionLong: "Platform where folks can make and review flash cards to help with whatever they are studying",
        technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Heroku",
        github: "https://www.github.com/fx-wood/extra",
        demo: {name: "Heroku Deployment", url:"https://extra-flashcards.herokuapp.com/"}
    },
    {
        name: "Props",
        image: propsImg,
        description: "Workplace engagement tool",
        descriptionLong: "A platform for employees to communicate and give their respects to each other",
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, reCharts",
        github: "https://www.github.com/fx-wood/props",
        demo: {name: "Heroku Deployment", url:"https://intense-basin-36132.herokuapp.com/"}
    },
    {
        name: "Tic-Tac-Toe",
        image: toeImg,
        description: "An old classic",
        descriptionLong: "Clean implementation of Tic-Tac-Toe with multiplayer, random AI and optimal AI",
        technologies: 'Javascript, shuffle algorithm, min-max algorithm',
        github: "https://www.github.com/fx-wood/tic-tac-toe",
        demo: {name: "Github Pages", url:"https://fx-wood.github.io/tic-tac-toe/"}
    },
    {
        name: "Mountain Road",
        image: mrImg,
        description: "Ridesharing app for skiiers and riders",
        descriptionLong: "For people who are planning travel to local ski resorts",
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, Material-ui",
        github: "https://www.github.com/fx-wood/mountainroad",
        demo: {name: "Heroku Deployment", url: "https://mountainroad.herokuapp.com"}
    },


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
    componentDidMount() {
        reactGA.pageview(window.location.pathname + window.location.search)
    }
    render() {
        let content;
        if (this.state.mobile) {
            content = (
                // mobile content 
                <CardColumns>
                    {projects.map((project, i) => <ProjectCard key={i} {...project}/>)}
                </CardColumns>
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
                    <div className="content">
                        <Container>
                            <Nav />
                            {content}
                        </Container>
                    </div>
                </div>
        )
    }
}

export default ProjectsPage