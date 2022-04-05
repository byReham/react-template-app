import { takeLatest, put, fork, all } from 'redux-saga/effects';

function* fetchIndex() {
  try {
    yield put({
      type: 'USERS_INDEX_SUCCESS',
    });
  } catch (e) {
    yield put({ type: 'USERS_INDEX_FAILURE' });
  }
}

function* watchIndexRequest() {
  yield takeLatest('USERS_INDEX_REQUEST', fetchIndex);
}

export function* asyncSaga() {
  yield all([fork(watchIndexRequest)]);
}
