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
                        <p>check out my <Link to="/">projects</Link></p>
                        <p>send me an <Link to="mailto:fxwood.work@gmail.com">email</Link></p>
                        <p>or connect with me on <Link to="https://linkedin.com/in/fx-wood"> linkedin!</Link></p>
                        <SocialMediaLinks />
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage
