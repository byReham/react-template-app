import { Provider } from 'react-redux';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { authProtectedRoutes, publicRoutes } from './routes';
import PrivateRoute from './routes/private-route';
import { store } from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {publicRoutes.map(({ path, component: Component, layout: Layout }, idx) => (
            <Route
              key={idx}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <PrivateRoute
                  component={route.component}
                  layout={route.layout}
                />
              }
              exact
            />
          ))}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
