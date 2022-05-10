import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/saga';
import modelsSaga from './models/saga';
import ordersSaga from './orders/saga';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(modelsSaga)]);
  yield all([fork(ordersSaga)]);
}
