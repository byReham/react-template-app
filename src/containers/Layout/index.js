import PropTypes from 'prop-types';

import { useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

import styles from './index.module.scss';

const Layout = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.root}>
      <Sidebar active={isMenuOpen} />

      <div className={styles.main}>
        <Header
          isMenuOpen={isMenuOpen}
          onClickToggleIcon={toggleSidebar}
          sidebar
        />
        <div className={styles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
