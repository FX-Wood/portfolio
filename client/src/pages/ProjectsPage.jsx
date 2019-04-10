import React, { Component } from 'react';
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard';

var projects = [
    {
        name: "Domblenon",
        image: "https://via.placeholder.com/300",
        description: "Dominion implementation",
        descriptionLong: "Simple implementation of the deck-building game Dominion.",
        technologies: "Express.js, ES6 classes, Google Charts",


    }
]

class ProjectsPage extends Component {
    render() {
        return (
                <div className="ProjectPage">
                    <Nav />
                    <h1>Projects</h1>
                    {projects.map(project => <ProjectCard {...project}/>)}
                </div>
        )
    }
}

export default ProjectsPage