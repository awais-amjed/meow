import './Navbar.scss';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Settings } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import pawPrint from '../images/pawprint.png';

const Navbar = ({
  title,
  hasBackButton,
}) => (
  <header>
    <nav>
      {hasBackButton ? (
        <NavLink to="/">
          <ArrowBackIosNewRoundedIcon
            className="icon"
            fontSize="small"
          />
        </NavLink>
      ) : <img src={pawPrint} alt="paw print" height="20" />}
      <p className="navbar-title">{title}</p>
      <Settings className="icon" fontSize="small" />
    </nav>
  </header>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool,
};

Navbar.defaultProps = {
  hasBackButton: false,
};

export default Navbar;
