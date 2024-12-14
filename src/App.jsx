import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Conditions from "./components/footer/footerLink/Conditions";
import Footer from "./components/footer/Footer";
import Policies from "./components/footer/footerLink/Policies";
import Technology from "./components/pages/technology/Technology";
import Book from "./components/booklaunch/Book";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Conditions" element={<Conditions />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/book-launch" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
