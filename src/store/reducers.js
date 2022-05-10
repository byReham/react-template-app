import { combineReducers } from 'redux';

import auth from './auth/reducer';
import models from './models/reducer';
import orders from './orders/reducer';

const rootReducer = combineReducers({
  auth,
  models,
  orders,
});

export default rootReducer;
