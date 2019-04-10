import React, { Component } from 'react';
import Nav from '../components/Nav';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/ProjectCard';


var projects = [
    {
        name: "Domblenon",
        image: "https://via.placeholder.com/300",
        description: "Dominion implementation",
        descriptionLong: "Simple implementation of the deck-building game Dominion.",
        technologies: "Express.js, ES6 classes, Google Charts",
    },
    {
        name: "Extra",
        image: "https://via.placeholder.com/300",
        description: "Flash cards as a service",
        descriptionLong: "Platform where folks can make and review flash cards to help with whatever they are studying",
        technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Heroku"
    },
    {
        name: "Props",
        image: "https://via.placeholder.com/300",
        description: "Workplace engagement tool",
        descriptionLong: "A platform for employees to communicate and give their respects to each other",
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, reCharts"
    }
]

class ProjectsPage extends Component {
    render() {
        return (
                <div className="ProjectPage">
                    <Nav />
                    <Container>
                        <h1>Projects</h1>
                        <CardDeck>
                            {projects.map(project => <ProjectCard {...project}/>)}
                        </CardDeck>
                    </Container>
                </div>
        )
    }
}

export default ProjectsPage