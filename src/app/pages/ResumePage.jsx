import React, { Component } from 'react';
import Nav from '../components/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import reactGA from 'react-ga';

import resume from '../img/website-resume-2023-09-14.png';
import pdf from '../img/website-resume-2023-09-14.pdf';

class ResumePage extends Component {
    componentDidMount() {
        reactGA.pageview(window.location.pathname + window.location.search)
    }
    render() {
        return (
            <div className="ResumePage">
                <Container>
                    <Nav />
                    <Row><a href={pdf} target="_blank" style={{margin: '5px', textDecoration: 'underline'}}>Download PDF</a></Row>
                    <Row><img src={resume} alt="Resume"/></Row>
                </Container>
            </div>
        )
    }
}

export default ResumePage
