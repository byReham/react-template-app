import { takeEvery, call, put } from 'redux-saga/effects';

import { users } from '../../api';

import { loginUser, logOutUser } from './actions';
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

function* loginSaga({ payload: { params, navigateBack } }) {
  try {
    const token = localStorage.getItem('jwt');

    const response = yield call(users.loginUser, params);

    if (!token) {
      localStorage.setItem('jwt', response.headers.authorization);
    }

    yield put(loginUser.success(response.data));
    navigateBack();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(loginUser.fail(error.response.data || error.response.statusText));
  }
}

function* logOutSaga({ payload: { navigateBack } }) {
  try {
    const response = yield call(users.logOutUser);

    yield put(logOutUser.success(response));
    localStorage.removeItem('jwt');
    navigateBack();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default function* usersSaga() {
  yield takeEvery(LOGIN_USER.RUN, loginSaga);
  yield takeEvery(LOGOUT_USER.RUN, logOutSaga);
}
