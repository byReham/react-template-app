import { Provider } from 'react-redux';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import { store } from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={<Layout />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
