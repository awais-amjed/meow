import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetailsPage = () => {
  const { state } = useLocation();
  const { breed } = state;

  return (
    <div id="details-page">
      <Navbar title={breed.name} hasBackButton />
      <p>
        {breed.id}
      </p>
    </div>
  );
};

export default DetailsPage;
