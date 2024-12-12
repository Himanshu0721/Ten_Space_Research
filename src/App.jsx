import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
import Navbar from './components/navbar/Navbar'
import Conditions from './components/footer/footerLink/Conditions'
import Footer from './components/footer/Footer'
import Policies from './components/footer/footerLink/Policies'
import Technology from "./components/pages/technology/Technology";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} /> 
        <Route path="/policies" element={<Policies />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
