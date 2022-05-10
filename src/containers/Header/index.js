import PropTypes from 'prop-types';

// import { Link as RouterLink } from 'react-router-dom';

import classnames from 'classnames';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './index.module.scss';

const Header = ({ isMenuOpen, onClickToggleIcon, sidebar }) => {
  return (
    <>
      <Navbar className={classnames('pd-3', styles.header)}>
        <Container
          className={classnames(styles.root)}
          fluid="md">
          <h1 className="m-0">ЗАКАЗЫ</h1>
          {sidebar ? (
            <div
              className={classnames('icon-primary', styles.toggleIcon)}
              onClick={onClickToggleIcon}>
              {isMenuOpen ? <AiOutlineMenu /> : <AiOutlineMenu />}
            </div>
          ) : null}
        </Container>
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
