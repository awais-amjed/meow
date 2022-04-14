import './Characteristic.scss';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ArrowCircleRightOutlined } from '@mui/icons-material';

const Characteristic = ({
  characteristic,
  value,
  isURL,
}) => (
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
);

Characteristic.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isURL: PropTypes.bool,
};

Characteristic.defaultProps = {
  isURL: false,
};

export default Characteristic;
