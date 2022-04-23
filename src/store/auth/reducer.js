import { makeReducer } from '../common';

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export default makeReducer(
  {
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
    error: null,
  },
);
