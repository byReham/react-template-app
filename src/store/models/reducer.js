import { makeReducer } from '../common';

import { MODELS_INDEX } from './actionTypes';

export default makeReducer(
  {
    [MODELS_INDEX.RUN]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [MODELS_INDEX.SUCCESS]: (state, { payload }) => ({
      ...state,
      index: payload,
      isLoading: false,
      error: null,
    }),
    [MODELS_INDEX.FAIL]: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
  {
    index: [],
    isLoading: false,
    error: null,
  },
);
