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
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/freelances' element={<Freelances/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/prices' element={<Prices/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    );
  }
    
  export default Header;