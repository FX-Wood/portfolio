import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage page">
                <Nav />
                <div className="content">
                    <Container>
                            <p>FX's portfolio site =></p>
                            <p>check out my <Link to="/projects">projects</Link></p>
                            <p>or my <Link to="/resume">resume.</Link></p>
                            <p><Link to="/contact">Get</Link> in touch!</p>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage