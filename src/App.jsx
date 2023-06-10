import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from './components/Navbar';
import Home from './components/Home';
//import Login from './components/Login';
import Landing from './components/Landing';
import Detail from './components/details';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
