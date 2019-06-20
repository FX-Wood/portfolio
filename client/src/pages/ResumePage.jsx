import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
                    <Row><a href="/downloads/resume" target="_blank" style={{margin: '5px', textDecoration: 'underline'}}>Download PDF</a></Row>
                    <Row><img src={resume} alt="Resume"/></Row>
                </Container>
            </div>
        )
    }
}

export default ResumePage