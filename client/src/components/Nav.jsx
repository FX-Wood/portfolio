import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav