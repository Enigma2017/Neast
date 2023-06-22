import React from 'react';
import ChooseHome from './Choose';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Developers from '../../pages/developers';
import Designers from '../../pages/designers';
import ProjectManagers from '../../pages/project-managers';
import ProductManagers from '../../pages/product-managers';


function ChooseHomeSpecialist() {
    return (
      <Router>
        <ChooseHome />
        <Routes>
          <Route path='/developers' element={<Developers/>} />
          <Route path='/designers' element={<Designers/>} />
          <Route path='/project-managers' element={<ProjectManagers/>} />
          <Route path='/product-managers' element={<ProductManagers/>} />
        </Routes>
      </Router>
    );
  }
    
  export default ChooseHomeSpecialist;