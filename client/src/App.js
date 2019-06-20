import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import ProjectMain from './pages/ProjectMain';
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-141098980-1');

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/projects/domblenon' component={ProjectMain} />
          <Route exact path='/projects/extra' component={ProjectMain} />
          <Route exact path='projects/props' component={ProjectMain} />
      </Router>
    );
  }
}

export default App;