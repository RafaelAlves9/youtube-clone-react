import React from 'react';
import ReactDOM from 'react-dom';

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
  ,
  document.getElementById('root')
);