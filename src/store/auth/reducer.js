import { makeReducer } from '../common';

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export default makeReducer(
  {
    [LOGIN_USER.RUN]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [LOGIN_USER.SUCCESS]: (state, { payload }) => ({
      ...state,
      currentUser: payload,
      isLoading: false,
      error: null,
    }),
    [LOGIN_USER.FAIL]: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    [LOGOUT_USER.SUCCESS]: state => ({
      ...state,
    }),
  },
  {
    currentUser: null,
    isLoading: false,
    error: null,
  },
);
