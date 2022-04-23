import PropTypes from 'prop-types';

import { Link as RouterLink, Outlet } from 'react-router-dom';

import classnames from 'classnames';

import styles from './index.module.scss';

const Sidebar = ({ active }) =>
  active && (
    <div
      className={classnames('text-white bg-dark sidebar', styles.sidebar, {
        [styles.active]: active,
      })}>
      <div className={styles.heading}>
        <div>
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle m-2"
          />
          <strong>mdo</strong>
        </div>
      </div>
      <ul className={classnames('m-auto sidebar-navlinks', styles.navLinkGroup)}>
        <li>
          <RouterLink
            className={classnames('text-white sidebar-navlinks__item', styles.navLinkItem)}
            to="#home">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            className={classnames('text-white', styles.navLinkItem)}
            to="#features">
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink
            className={classnames('text-white', styles.navLinkItem)}
            to="#pricing">
            Pricing
          </RouterLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Sidebar;
