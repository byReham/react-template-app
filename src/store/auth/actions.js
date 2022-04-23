import { asyncAction } from '../common';

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = asyncAction(LOGIN_USER);
export const logOutUser = asyncAction(LOGOUT_USER);
