import PropTypes from 'prop-types';

// import Footer from '../Footer';
// import Header from '../Header';

import styles from './index.module.scss';

const PublicLayout = props => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PublicLayout;
