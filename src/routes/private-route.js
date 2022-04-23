import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';

import urls from '../api/urls';
import useNavigateBack from '../hooks/useNavigateBack';
import { loginUser } from '../store/auth';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const location = useLocation();
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  const isAuth = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const navigateBack = useNavigateBack();

  if (!isAuth) {
    return (
      <Navigate
        to={urls.users.signIn}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!currentUser) {
    dispatch(loginUser({ navigateBack }));
  }

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
};

export default PrivateRoute;
