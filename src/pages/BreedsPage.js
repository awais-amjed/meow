import './BreedsPage.scss';
import { Container, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchBreeds } from '../redux/breeds/breeds';
import BreedCard from '../components/BreedCard';
import Navbar from '../components/Navbar';

const BreedsPage = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state);

  useEffect(() => {
    if (!breeds.length) dispatch(fetchBreeds());
  }, []);

  return (
    <div id="breeds-page">
      <Navbar title="Meow" />
      <div className="headline">
        <img src="https://media.giphy.com/media/yxtJv5bqYHUbwTA7Gx/giphy.gif" alt="cat gif" />
        <p>&quot;Here shall be displayed a meow fact&quot;</p>
      </div>
      <h1 className="divider">LIST OF CAT BREEDS</h1>
      {!breeds.length ? <ReactLoading type="spinningBubbles" className="loading-indicator" /> : (
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
      )}
    </div>
  );
};

export default BreedsPage;
