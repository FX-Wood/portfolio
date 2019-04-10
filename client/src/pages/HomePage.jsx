import React, { Component } from 'react';
import Nav from '../components/Nav';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Nav />
                <h1>Home</h1>
            </div>
        )
    }
}

export default HomePage