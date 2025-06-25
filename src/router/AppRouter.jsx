import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Landing/HomePage.jsx';
import CourseDetailsPage from '../Pages/CourseDetails/CourseDetailsPage.jsx';
import CheckoutPage from '../Pages/Checkout/CheckoutPage.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/" element={<CourseDetailsPage />} /> */}
        <Route path="/" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 