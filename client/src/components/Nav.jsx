import React from 'react';
import { Link } from 'react-router-dom';
import { Nav as BootNav } from 'react-bootstrap';

const Nav = props => {
    return (
        <BootNav as="nav" >
            <BootNav.Item className="nav-button btn btn-outline-*"><Link to="/">Home</Link></BootNav.Item>
            <BootNav.Item className="nav-button btn btn-outline-*"><Link to="/projects">Projects</Link></BootNav.Item>
            <BootNav.Item className="nav-button btn btn-outline-*"><Link to="/resume">Resume</Link></BootNav.Item>
            <BootNav.Item className="nav-button btn btn-outline-*"><Link to="/contact">Contact</Link></BootNav.Item>
        </BootNav>
    )
}

export default Nav