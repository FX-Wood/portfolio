import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
import resume from '../resume.png';

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <Nav />
                <h1>Resume</h1>
                <Container>
                    <img src={resume} alt="Resume"/>
                </Container>
            </div>
        )
    }
}

export default ResumePage