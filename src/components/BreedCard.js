import { Col } from 'react-bootstrap';
import './BreedCard.scss';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

const BreedCard = ({
  imageURL,
  name,
  origin,
}) => (
  <Col className="breed-card">
    <div className="image-part">
      <img src={imageURL} alt="breed" />
      <ArrowCircleRightOutlined />
    </div>
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
};

export default BreedCard;
