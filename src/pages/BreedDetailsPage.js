import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import ReactLoading from 'react-loading';
import Navbar from '../components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchCarousel, resetCarousel } from '../redux/carousel/carousel';

const BreedDetailsPage = () => {
  const { state } = useLocation();
  const { breed } = state;
  const dispatch = useDispatch();
  const carousel = useSelector((state) => state.carousel);

  useEffect(() => {
    dispatch(resetCarousel());
    dispatch(fetchCarousel({ id: breed.id }));
  }, []);

  return (
    <div id="details-page">
      <Navbar title={breed.name} hasBackButton />
      {carousel && carousel.length > 0 ? (
        <Carousel showArrows autoPlay swipeable axis="horizontal" showThumbs={false} showStatus={false} dynamicHeight={false} infiniteLoop>
          {carousel.map((image) => <img key={image} src={image} alt="" />)}
        </Carousel>
      ) : <ReactLoading type="spinningBubbles" className="loading-indicator" />}
    </div>
  );
};

export default BreedDetailsPage;
