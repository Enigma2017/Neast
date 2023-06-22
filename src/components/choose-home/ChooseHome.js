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
          <Route path='/developers' component={Developers} />
          <Route path='/designers' component={Designers} />
          <Route path='/project-managers' component={ProjectManagers} />
          <Route path='/product-managers' component={ProductManagers} />
        </Routes>
      </Router>
    );
  }
    
  export default ChooseHomeSpecialist;