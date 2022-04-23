import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import classnames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillRightSquare, AiFillLeftSquare } from 'react-icons/ai';

import styles from './index.module.scss';

const Header = ({ isMenuOpen, onClickToggleIcon, sidebar }) => {
  return (
    <>
      <Navbar className={classnames(styles.header)}>
        {sidebar ? (
          <div
            className={classnames('text-dark', styles.toggleIcon)}
            onClick={onClickToggleIcon}>
            {isMenuOpen ? <AiFillLeftSquare /> : <AiFillRightSquare />}
          </div>
        ) : null}
        <Navbar.Brand
          className={styles.brand}
          as={RouterLink}
          to="/">
          Brestmoda
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  onClickToggleIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  sidebar: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};

Header.defaultProps = {
  onClickToggleIcon: null,
  isMenuOpen: false,
  sidebar: false,
};

export default Header;
