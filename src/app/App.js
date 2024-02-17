import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

class App extends Component {
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
