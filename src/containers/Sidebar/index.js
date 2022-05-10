import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { Link as RouterLink, Outlet } from 'react-router-dom';

import classnames from 'classnames';

import useNavigateBack from '../../hooks/useNavigateBack';
import { logoutUser } from '../../store/auth';

import styles from './index.module.scss';

const Sidebar = ({ active }) => {
  const currentUser = useSelector(({ auth }) => auth.currentUser || {});
  const dispatch = useDispatch();
  const navigateBack = useNavigateBack();

  const handleLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser({ navigateBack }));
  };

  if (!active) return null;

  return (
    <div
      className={classnames('text-white bg-dark sidebar', styles.sidebar, {
        [styles.active]: active,
      })}>
      <div className={styles.heading}>
        <strong className="me-4">{currentUser.name}</strong>
        <small
          className={classnames('text-danger', styles.logout)}
          onClick={handleLogoutClick}>
          Выйти
        </small>
      </div>
      <div className="m-auto pt-2">
        <ul className={classnames('sidebar-navlinks', styles.navLinkGroup)}>
          <li>
            <RouterLink
              className={classnames('sidebar-navlinks__item', styles.navLinkItem)}
              to="/companies">
              Компании
            </RouterLink>
          </li>
          <li>
            <RouterLink
              className={classnames('sidebar-navlinks__item', styles.navLinkItem)}
              to="/models">
              Управление наличием
            </RouterLink>
          </li>
          <li>
            <RouterLink
              className={classnames('sidebar-navlinks__item', styles.navLinkItem)}
              to="/orders">
              Заказы
            </RouterLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  active: PropTypes.bool,
};

Sidebar.defaultProps = {
  active: true,
};

export default Sidebar;
