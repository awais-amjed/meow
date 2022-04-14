import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BreedsPage from './pages/BreedsPage';
import BreedDetailsPage from './pages/BreedDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div id="app" className="content">
        <Routes>
          <Route path="/" element={<BreedsPage />} />
          <Route path="/details" element={<BreedDetailsPage />} />
          <Route path="*" element={<BreedsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
