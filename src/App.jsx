import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
