import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import History from './components/History';
import AboutUs from './components/AboutUs';
// Importuj sve ostale komponente koje želiš

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Dodaj sve ostale rute */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
