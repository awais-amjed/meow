import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BreedsPage from './pages/BreedsPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div id="app" className="content">
        <Routes>
          <Route path="/" element={<BreedsPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="*" element={<BreedsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
