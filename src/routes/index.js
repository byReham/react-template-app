import urls from '../api/urls';
import AuthLayout from '../containers/AuthLayout';
import Layout from '../containers/Layout';
import Login from '../pages/Auth/Login';
import Registration from '../pages/Auth/Registration';
import Dashboard from '../pages/Dashboard';
import Models from '../pages/Models';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';

const authProtectedRoutes = [
  { path: '*', component: NotFound, layout: Layout },
  { path: urls.dashboard, component: Dashboard, layout: Layout, exact: true },
  { path: urls.models.index, component: Models, layout: Layout, exact: true },
  { path: urls.orders.index, component: Orders, layout: Layout, exact: true },
];

const publicRoutes = [
  { path: urls.users.signIn, component: Login, layout: AuthLayout },
  { path: urls.users.signUp, component: Registration, layout: AuthLayout },
  // { path: '/logout', component: Logout },
  // { path: '/forgot-password', component: ForgetPwd },
  // { component: NotFound },
];

export { publicRoutes, authProtectedRoutes };
