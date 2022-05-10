import { asyncAction } from '../common';

import { ORDERS_INDEX, ORDERS_NEXT_PAGE } from './actionTypes';

export const ordersIndex = asyncAction(ORDERS_INDEX);
export const ordersNextPage = asyncAction(ORDERS_NEXT_PAGE);
