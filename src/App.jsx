import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Comps/Global/Navbar';
import Footer from './Comps/Global/Footer';
import Home from './Comps/Local/Home';
import About from './Comps/Local/About';
import History from './Comps/Local/History';
import Committee from './Comps/Local/Committee';
import Contact from './Comps/Local/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
