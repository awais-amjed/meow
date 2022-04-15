import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import ReactLoading from 'react-loading';
import { Container, Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchCarousel, resetCarousel } from '../redux/carousel/carousel';
import './BreedDetailsPage.scss';
import CharacteristicCard from '../components/CharacteristicCard';

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
    <div id="breed-details-page">
      <Navbar title={breed.name} hasBackButton />
      <div className="headline">
        {carousel && carousel.length > 0 ? (
          <Carousel showArrows autoPlay swipeable axis="horizontal" showThumbs={false} showStatus={false} dynamicHeight={false} infiniteLoop>
            {carousel.map((image) => <img key={image} src={image} alt="" />)}
          </Carousel>
        ) : <ReactLoading type="spinningBubbles" />}
      </div>
      <h1 className="divider">DETAILED CHARACTERISTICS</h1>
      <Container fluid>
        <Row xs={1} lg={2} xxl={3}>
          <CharacteristicCard characteristic="Adaptability" value={`${breed.adaptability}/5`} />
          <CharacteristicCard characteristic="Affection Level" value={`${breed.affection_level}/5`} />
          <CharacteristicCard characteristic="Child Friendly" value={`${breed.child_friendly}/5`} />
          <CharacteristicCard characteristic="Description" value={`${breed.description}`} />
          <CharacteristicCard characteristic="Dog Friendly" value={`${breed.dog_friendly}/5`} />
          <CharacteristicCard characteristic="Energy Level" value={`${breed.energy_level}/5`} />
          <CharacteristicCard characteristic="Grooming" value={`${breed.grooming}/5`} />
          <CharacteristicCard characteristic="Hairless" value={`${breed.hairless}/5`} />
          <CharacteristicCard characteristic="Health Issues" value={`${breed.health_issues}/5`} />
          <CharacteristicCard characteristic="Hypoallergenic" value={`${breed.hypoallergenic}/5`} />
          <CharacteristicCard characteristic="Indoor" value={`${breed.indoor}/5`} />
          <CharacteristicCard characteristic="Intelligence" value={`${breed.intelligence}/5`} />
          <CharacteristicCard characteristic="Lap" value={`${breed.lap}/5`} />
          <CharacteristicCard characteristic="Life Span" value={`${breed.life_span} years`} />
          <CharacteristicCard characteristic="Natural" value={`${breed.natural}/5`} />
          <CharacteristicCard characteristic="Origin" value={`${breed.origin}`} />
          <CharacteristicCard characteristic="Rare" value={`${breed.rare}/5`} />
          <CharacteristicCard characteristic="Rex" value={`${breed.rex}/5`} />
          <CharacteristicCard characteristic="Shedding Level" value={`${breed.shedding_level}/5`} />
          <CharacteristicCard characteristic="Short Legs" value={`${breed.short_legs}/5`} />
          <CharacteristicCard characteristic="Social Needs" value={`${breed.social_needs}/5`} />
          <CharacteristicCard characteristic="Stranger Friendly" value={`${breed.stranger_friendly}/5`} />
          <CharacteristicCard characteristic="Suppressed Tail" value={`${breed.suppressed_tail}/5`} />
          <CharacteristicCard characteristic="Temperament" value={`${breed.temperament}/5`} />
          <CharacteristicCard characteristic="Vocalisation" value={`${breed.vocalisation}/5`} />
          <CharacteristicCard characteristic="Weight" value={`${breed.weight.metric} kg`} />
          <CharacteristicCard characteristic="Wikipedia" value={`${breed.wikipedia_url}`} isURL />
          <CharacteristicCard characteristic="Vet Street" value={`${breed.vetstreet_url}`} isURL />
          <CharacteristicCard characteristic="VCA Hospital" value={`${breed.vcahospitals_url}`} isURL />
          <CharacteristicCard characteristic="CFA" value={`${breed.cfa_url}`} isURL />
        </Row>
      </Container>
    </div>
  );
};

export default BreedDetailsPage;
