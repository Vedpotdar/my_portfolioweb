import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from './component/AboutMePage';
import Home from './component/Home';
import PortfolioPage from './component/PortfolioPage';
import ContactPage from './component/contactpage';
import ServicesPage from './component/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
