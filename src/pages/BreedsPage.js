import './BreedsPage.scss';
import { Container, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchBreeds } from '../redux/breeds/breedsReducer';
import BreedCard from '../components/BreedCard';
import Navbar from '../components/Navbar';
import { fetchMeowFact } from '../redux/fact/fact';

const BreedsPage = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);
  const fact = useSelector((state) => state.fact);

  useEffect(() => {
    if (fact === '') dispatch(fetchMeowFact());
    if (!breeds.length) dispatch(fetchBreeds());
  }, []);

  return (
    <div id="breeds-page">
      <Navbar title="Cat Breeds" />
      <div className="headline">
        <img src="https://media.giphy.com/media/yxtJv5bqYHUbwTA7Gx/giphy.gif" alt="cat gif" />
        <div>
          <p className="meow-fact">Meow Fact</p>
          <p>
            {fact === '' ? <ReactLoading type="cubes" /> : fact ?? 'We failed to get a fact for meow :('}
          </p>
        </div>
      </div>
      <h1 className="divider">LIST OF CAT BREEDS</h1>
      {/* eslint-disable-next-line no-nested-ternary */}
      {breeds ? !breeds.length ? <ReactLoading type="spinningBubbles" className="loading-indicator" /> : (
        <Container fluid>
          <Row xs={2}>
            {breeds.map(({
              id,
              origin,
              name,
              image,
            }) => (
              <BreedCard
                key={id}
                origin={origin}
                name={name}
                imageURL={image && image.url ? image.url : 'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'}
              />
            ))}
          </Row>
        </Container>
      ) : <p className="loading-indicator">We are unable to get breeds fow now :(</p>}
    </div>
  );
};

export default BreedsPage;
