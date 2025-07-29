// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Portfolio from "./pages/Portfolio";
import Interests from "./pages/Interests";
import Visuals from "./pages/Visuals";
import CV from "./pages/CV";
import Certificates from "./pages/Certificates";
import Commerce from "./pages/Commerce";
import Patron from "./pages/Patron";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f8f2] text-[#2f2f1d] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/patron" element={<Patron />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
