import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { store } from "./store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

const Layout = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
