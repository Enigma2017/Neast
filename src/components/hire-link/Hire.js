import React from 'react';
import HireHome from './HireHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HireSpecialist from '../../pages/hire';


function Hire() {
    return (
      <Router>
        <HireHome />
        <Routes>
          <Route path='/hire' component={HireSpecialist} />
        </Routes>
      </Router>
    );
  }
    
  export default Hire;