import React, { Component } from 'react';
import Nav from '../components/Nav';
import resume from './resume';
import Container from 'react-bootstrap/Container'
class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <Nav />
                <h1>Resume</h1>
                <Container>
                    {resume}
                </Container>
            </div>
        )
    }
}

export default ResumePage