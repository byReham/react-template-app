import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

/* eslint-disable no-underscore-dangle */
const devTools = () =>
  process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = devTools() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable no-underscore-dangle */

const store = createStore(reducers, composeEnhancer(enhancer));

sagaMiddleware.run(sagas);

export { store };
