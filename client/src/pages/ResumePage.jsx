import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
import resume from '../img/resume.png';
import reactGA from 'react-ga';

class ResumePage extends Component {
    componentDidMount() {
        reactGA.pageview(window.location.pathname + window.location.search)
    }
    render() {
        return (
            <div className="ResumePage">
                <Container>
                <Nav />
                    <img src={resume} alt="Resume"/>
                </Container>
            </div>
        )
    }
}

export default ResumePage