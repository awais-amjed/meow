import './Navbar.scss';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Settings } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import pawPrint from '../images/pawprint.png';

const Navbar = ({
  title,
  hasBackButton,
}) => (
  <header>
    <Slide direction="down">
      <nav>
        {hasBackButton ? (
          <NavLink to="/">
            <ArrowBackIosNewRoundedIcon className="icon" />
          </NavLink>
        ) : <img src={pawPrint} alt="paw print" height="20" />}
        <h2 className="navbar-title">{title}</h2>
        <Settings className="icon" />
      </nav>
    </Slide>
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
