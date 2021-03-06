import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SocialMediaLinks from '../components/SocialMediaLinks';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage page">
                <div className="content">
                    <Container>
                        <Nav /> 
                        <p>FX's portfolio:</p>
                        <p>check out my <Link to="/projects">projects</Link></p>
                        <p>or my <Link to="/resume">resume.</Link></p>
                        <p><Link to="/contact">Get</Link> in touch!</p>
                        <SocialMediaLinks />
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage