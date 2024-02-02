import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
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
          <Route path='/' element={<ProjectsPage />} />
          <Route path="/contact" element={<HomePage />} />
      </Routes>
    );
  }
}

export default App;
