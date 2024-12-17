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
import Agnibaan from "./components/Agnibaan/Agnibaan";
import Career from "./components/pages/career/Career";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Conditions" element={<Conditions />} />
        <Route path="/agnibaan" element={<Agnibaan />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/book-launch" element={<Book />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
