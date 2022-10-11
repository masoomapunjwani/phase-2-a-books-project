import React from 'react';
import NavBar from './components/NavBar.js';
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (                                                                                                                                                                                                                                                                                                                                                                                                
    <div className="App">
      <BrowserRouter>
        <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
