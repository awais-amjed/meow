import { Col } from 'react-bootstrap';
import './BreedCard.scss';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Zoom } from 'react-awesome-reveal';

const BreedCard = ({
  imageURL,
  name,
  origin,
  onClick,
}) => (
  <Col className="breed-card" onClick={onClick}>
    <div className="background" />
    <Zoom>
      <div className="image-part">
        <img src={imageURL} alt="breed" />
        <ArrowCircleRightOutlined />
      </div>
    </Zoom>
    <div className="text-part">
      <h3>{name}</h3>
      <p>{origin}</p>
    </div>
  </Col>
);

BreedCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BreedCard;
