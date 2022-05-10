import { takeEvery } from 'redux-saga/effects';

import { models } from '../../api';
import { asyncSaga } from '../common/saga';

import { modelsIndex } from './actions';
import { MODELS_INDEX } from './actionTypes';

export default function* modelsSaga() {
  yield takeEvery(
    MODELS_INDEX.RUN,
    asyncSaga(action => models.index(action), modelsIndex),
  );
}
