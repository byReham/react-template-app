import { call, put } from "redux-saga/effects";

export const asyncSaga = (api, action) => {
  return function* aSaga({ payload }) {
    try {
      const response = yield call(api, payload);

      yield put(action.success(response.data.data));
    } catch (error) {
      console.error(error);
      yield put(action.fail(error));
    }
  };
};
