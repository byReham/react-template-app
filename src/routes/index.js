import urls from '../api/urls';
import AuthLayout from '../containers/AuthLayout';
import Layout from '../containers/Layout';
import Login from '../pages/Auth/Login';
import Registration from '../pages/Auth/Registration';
import Dashboard from '../pages/Dashboard';

const authProtectedRoutes = [
  { path: urls.dashboard, component: Dashboard, layout: Layout, exact: true },
  // { component: NotFound },
];

const publicRoutes = [
  // { path: '/logout', component: Logout },
  { path: urls.users.signIn, component: Login, layout: AuthLayout },
  { path: urls.users.signUp, component: Registration, layout: AuthLayout },
  // { path: '/forgot-password', component: ForgetPwd },
];

export { publicRoutes, authProtectedRoutes };
