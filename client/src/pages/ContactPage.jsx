import React, { Component } from 'react';
import reactGA from 'react-ga';
import Nav from '../components/Nav';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
class ContactPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()
        console.log(this.state)
    }
    componentDidMount() {
        reactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <div className="ContactPage page">
                <Nav />
                <div className="content">
                    <Container>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup className="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" name="name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Email: </Form.Label>
                                <Form.Control type="email" name="email" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Message: </Form.Label>
                                <Form.Control as="textarea" name="message" rows="4" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit">Send</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ContactPage