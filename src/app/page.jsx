"use client"
import React, { useState, useEffect } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import ProjectCard from './components/ProjectCard';
import ProjectRow from './components/ProjectRow'

import debounce from 'lodash.debounce'


var projects = [
    {
        name: "recipelf",
        images: [ '/img/recipelf.png' ],
        description: 'Generate new recipes using chatGPT and the ingredients in your kitchen',
        descriptionLong: [
            'Deployed on AWS EC2 via Docker and nginx reverse proxy',
            'Uses OpenAI API to generate recipes on demand',
            'Includes Auth system for sign-ups and user management'
        ],
        technologies: 'generative AI, react, expressjs, css, html, postgres, authentication/authorization, JWT',
        github: 'https://github.com/fx-wood/recipelf',
        demo: {name: "AWS Deployment", url: 'https://recipelf.com'},
    },
    {
        name: "likeable",
        images: ['/img/likeable.png'],
        description: 'Tinder for design options. Swipe left or right to be presented with personalized design recommendations',
        descriptionLong: [''],
        technologies: 'recommender, design, hackathon, architecture-engineering-construction',
        github: 'https://github.com/fx-wood/mesh-server',
        demo: {name: "Vercel Deployment", url: 'https://likeable.vercel.app'},
    },
    {
        name: "Dicemagic.beyond",
        images: ['/img/dicemagic-beyond.png'],
        description: 'dice rolling web extension for tabletop games',
        descriptionLong: [''],
        technologies: 'chrome/firefox browser apis, js classes, event listeners, mutation observers',
        github: 'https://www.github.com/fx-wood/dicemagic.beyond',
        demo: {name: "Chrome Store", url: 'https://chrome.google.com/webstore/detail/dicemagicbeyond/jdiefafcjohmkpnbgednhedeghbbgmbe'},
    },
    {
        name: "SeattleJS Airtable CLI",
        images: ['/img/seattlejs-airtable-cli.png'],
        description: 'CLI Tool for administering the SeattleJS.com website',
        descriptionLong: [''],
        technologies: 'CLI, airtable',
        github: 'https://github.com/seattlejs/seattlejs-airtable-cli',
        demo: {name: "NPM Deployment", url: 'https://npmjs.org/seattlejs-airtable-cli'},
    },
    {
        name: "Domblenon",
        images: ['/img/kingdom-select.png'],
        description: "Simple Dominion kingdom picker",
        descriptionLong: ["Simple kingdom picker for dominion"],
        technologies: "Express.js, ES6 classes, Google Charts",
        github: "https://www.github.com/fx-wood/Domblenon",
        demo: {name: "Github Pages", url:"https://fx-wood.github.io/DombleHost/"}
    },
    {
        name: "Extra",
        images: ['/img/create-cards.png'],
        description: "Flash cards as a service",
        descriptionLong: ["Platform where folks can make and review flash cards to help with whatever they are studying"],
        technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Heroku",
        github: "https://www.github.com/fx-wood/extra",
        demo: {name: "Heroku Deployment", url:"https://extra-flashcards.herokuapp.com/"}
    },
    {
        name: "Props",
        images: ['/img/props-login.png'],
        description: "Workplace engagement tool",
        descriptionLong: ["A platform for employees to communicate and give their respects to each other"],
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, reCharts",
        github: "https://www.github.com/fx-wood/props",
        demo: {name: "Heroku Deployment", url:"https://props-app.herokuapp.com"}
    },
    {
        name: "Tic-Tac-Toe",
        images: ['/img/tic-tac-toe.png'],
        description: "An old classic",
        descriptionLong: ["Clean implementation of Tic-Tac-Toe with multiplayer, random AI and optimal AI"],
        technologies: 'Javascript, shuffle algorithm, min-max algorithm',
        github: "https://www.github.com/fx-wood/tic-tac-toe",
        demo: {name: "Github Pages", url:"https://fx-wood.github.io/tic-tac-toe/"}
    },
    {
        name: "Mountain Road",
        images: ['/img/mr-splash.png'],
        description: "Ridesharing app for skiiers and riders",
        descriptionLong: ["For people who are planning travel to local ski resorts"],
        technologies: "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, Material-ui",
        github: "https://www.github.com/fx-wood/mountainroad",
        demo: {name: "Heroku Deployment", url: "https://mountainroad.herokuapp.com"}
    },
]

const HomePage = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)
    const handleResize = () => {
        if (window.innerWidth < 1200) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(
        () => {
            window.addEventListener('resize', debounce( handleResize ))
        }
    )
    
    let content;
    if (isMobile) {
        content = (
            // mobile content 
            <CardColumns>
                {projects.map((project, i) => <ProjectCard key={i} {...project}/>)}
            </CardColumns>
        )
    } else {
        content = (
            // desktop content
            projects.map((project, i) => <ProjectRow key={i} {...project} />)
        )
    }
    if (!content) {
        content = <p>There was an error</p>
    }
    return (
        <main>
            {content}
        </main>
    )
}

export default HomePage
