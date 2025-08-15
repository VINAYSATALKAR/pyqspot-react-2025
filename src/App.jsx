import React from 'react'
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './fonts.css'
import SEComputer from './pages/yearpages/Secomputer';
import TEComputer from './pages/yearpages/tecomputer';
import BEComputer from './pages/yearpages/Becomputer';

import TEAI from './pages/yearpages/teai';
import SEAIComponent from "./pages/yearpages/Seai";

import BEAI from './pages/yearpages/AidsBE';
import SEMechanical from './pages/yearpages/semech';
import TEMechanical from './pages/yearpages/temech';
import BEMech from './pages/yearpages/Bemech';
import FirstYear from './pages/yearpages/FisrtYear';

const App = () => {
  return (
<>

<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/secomputer" element={<SEComputer/>} />
        <Route path="/tecomputer" element={<TEComputer/>} />
        <Route path="/becomputer" element={<BEComputer/>} />
        <Route path="/seai" element={<SEAIComponent/>} />
        <Route path="/teai" element={<TEAI/>} />
        <Route path="/beaids" element={<BEAI/>} />
        <Route path="/semechanical" element={<SEMechanical/>} />
        <Route path="/temechanical" element={<TEMechanical/>} />
        <Route path="/bemechanical" element={<BEMech/>} />
        <Route path="/firstyear" element={<FirstYear/>} />
      </Routes>
      <Footer />
 

    
</>
  
  )
}

export default App