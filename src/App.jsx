import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
// import Book from './components/booklaunch/Book'
import Book from './components/booklaunch/Book'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/book" element={<Book />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
