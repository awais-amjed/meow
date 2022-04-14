import './CharacteristicCard.scss';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { Fade } from 'react-awesome-reveal';

const CharacteristicCard = ({
  characteristic,
  value,
  isURL,
}) => (
  <Fade>
    <Col className="characteristic">
      <h2>{characteristic}</h2>
      {isURL
        ? (
          <a href={value} target="_blank" rel="noreferrer">
            <ArrowCircleRightOutlined />
          </a>
        )
        : <p>{value}</p>}
    </Col>
  </Fade>
);

CharacteristicCard.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isURL: PropTypes.bool,
};

CharacteristicCard.defaultProps = {
  isURL: false,
};

export default CharacteristicCard;
