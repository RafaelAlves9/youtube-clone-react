import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './main/HomePage.jsx'
import Login from './main/Login.jsx'

ReactDOM.render(
  <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
=======
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes.jsx'

ReactDOM.render(
  
  <BrowserRouter>

    <Routes />
    
  </BrowserRouter>
>>>>>>> parent of 0804a706 (up)
  ,
  document.getElementById('root')
);