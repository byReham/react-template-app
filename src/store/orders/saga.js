import { takeEvery, call, put } from 'redux-saga/effects';

import { orders } from '../../api';
import { asyncSaga } from '../common';

import { ordersIndex } from './actions';
import { ORDERS_INDEX, ORDERS_NEXT_PAGE } from './actionTypes';

function* fetchNextPage({ payload }) {
  try {
    const response = yield call(orders.index, payload);

    yield put(ordersNextPage.success(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(ordersNextPage.fail(error.response.data || error.response.statusText));
  }
}

export default function* ordersSaga() {
  yield takeEvery(
    ORDERS_INDEX.RUN,
    asyncSaga(action => orders.index(action), ordersIndex),
  );
  yield takeEvery(ORDERS_NEXT_PAGE.RUN, fetchNextPage);
}
