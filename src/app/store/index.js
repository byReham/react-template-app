import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer as authReducer, asyncSaga as authSaga } from './auth';

const reducer = combineReducers({ authReducer });

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

/* eslint-disable no-underscore-dangle */
const devTools = () =>
  process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = devTools() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable no-underscore-dangle */

const store = createStore(reducer, composeEnhancer(enhancer));

[authSaga].map(saga => sagaMiddleware.run(saga));

export { store };
