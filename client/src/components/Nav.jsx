import React from 'react';
import { Link } from 'react-router-dom';
import { Nav as bootNav } from 'react-bootstrap';

const Nav = props => {
    return (
        <bootNav as="nav" >
            <bootNav.Item><Link to="/">Home</Link></bootNav.Item>
            <bootNav.Item><Link to="/projects">Projects</Link></bootNav.Item>
            <bootNav.Item><Link to="/resume">Resume</Link></bootNav.Item>
            <bootNav.Item><Link to="/contact">Contact</Link></bootNav.Item>
        </bootNav>
    )
}

export default Nav