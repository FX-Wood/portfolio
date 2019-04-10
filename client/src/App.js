import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <h1>App</h1>
          <Route exact path="/" component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/contact' component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
