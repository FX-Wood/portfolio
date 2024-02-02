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
                        <p>check out my <Link to="/projects">projects</Link></p>
                        <p>
                            <Link to="mailto:fxwood.work@gmail.com">send me an email</Link>
                            or
                            <Link to="https://linkedin.com/in/fx-wood">connect with me on linkedin!</Link>
                        </p>
                        <SocialMediaLinks />
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage
