import { makeReducer } from '../common';

import { ORDERS_INDEX, ORDERS_NEXT_PAGE } from './actionTypes';

export default makeReducer(
  {
    [ORDERS_INDEX.RUN]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [ORDERS_INDEX.SUCCESS]: (state, { payload }) => ({
      ...state,
      index: payload,
      isLoading: false,
      error: null,
    }),
    [ORDERS_INDEX.FAIL]: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    [ORDERS_NEXT_PAGE.RUN]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [ORDERS_NEXT_PAGE.SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      index: [...state.index, ...data],
      isLoading: false,
      error: null,
    }),
    [ORDERS_NEXT_PAGE.FAIL]: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
  {
    index: [],
    total: 0,
    isLoading: false,
    error: null,
  },
);
