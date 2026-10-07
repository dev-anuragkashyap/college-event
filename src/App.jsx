import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
// Import your other pages here as you create them, for example:
import About from './Components/About';
// import Events from './pages/Events';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/events" element={<Events />} /> */}
            {/* 
            */}
            <Route path="/gallery" element={<Gallery />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}