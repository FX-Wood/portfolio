import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route exact path='/projects/domblenon' component={<ProjectMain />} />
          <Route exact path='/projects/extra' component={<ProjectMain />} />
          <Route exact path='/projects/props' component={<ProjectMain />} />
      </Routes>
    );
  }
}

export default App;
