import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import BreedsPage from './pages/BreedsPage';

function App() {
  return (
    <BrowserRouter>
      <div id="app" className="content">
        <Routes>
          <Route path="/" element={<BreedsPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
