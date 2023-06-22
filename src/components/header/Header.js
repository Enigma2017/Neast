import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/';
import About from '../../pages/about';
import Blog from '../../pages/blog';
import Contact from '../../pages/contact';
import Freelances from '../../pages/freelances';
import Prices from '../../pages/prices';
import Profile from '../../pages/profile';
import Register from '../../pages/register';
import Skills from '../../pages/skills';


function Header() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/freelances' component={Freelances} />
          <Route path='/skills' component={Skills} />
          <Route path='/blog' component={Blog} />
          <Route path='/prices' component={Prices} />
          <Route path='/contact' component={Contact} />
          <Route path='/profile' component={Profile} />
          <Route path='/register' component={Register} />
        </Routes>
      </Router>
    );
  }
    
  export default Header;