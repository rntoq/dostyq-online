import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetailsPage from './Pages/CourseDetails/CourseDetailsPage';
import HomePage from './Pages/Landing/HomePage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<CourseDetailsPage />} />
        </Routes>
      </Router>
  );
};

export default App;