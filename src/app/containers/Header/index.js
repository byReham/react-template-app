import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import classnames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillRightSquare, AiFillLeftSquare } from 'react-icons/ai';

import styles from './index.module.scss';

const Header = ({ isMenuOpen, onClickToggleIcon }) => {
  return (
    <>
      <Navbar
        className={classnames(styles.header, { [styles.active]: !isMenuOpen })}
        bg="dark"
        variant="dark">
        <div
          className={classnames('text-white', styles.toggleIcon)}
          onClick={onClickToggleIcon}>
          {isMenuOpen ? <AiFillLeftSquare /> : <AiFillRightSquare />}
        </div>
        <Navbar.Brand
          as={RouterLink}
          to="/">
          Brestmoda
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  onClickToggleIcon: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
};

Header.defaultProps = {
  isMenuOpen: false,
};

export default Header;
