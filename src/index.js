import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/fonts/intro.ttf';
import Home from './pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);