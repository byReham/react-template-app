import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getOrders } from '../store/orders';

import { useQuery } from './query';

export const useOrders = (
  initialParams = {
    page: 1,
    pageSize: 50,
    sortingColumn: 'orderedAt',
    sortingDirection: 'desc',
  },
) => {
  const [params, updateParams] = useQuery(initialParams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(params));
  }, [params]);

  const clearFilter = useCallback(() => {
    updateParams(initialParams);
  }, [initialParams]);

  const makeSetFilter = useCallback(
    column => value => {
      const newParams = {
        ...params,
        page: 1,
        [column]: value,
      };
      const keysToClear = [];

      if (!value) keysToClear.push(column);

      updateParams(newParams, keysToClear);
    },
    [params, updateParams],
  );

  return {
    data: useSelector(state => state.orders.orders.results),
    isLoading: useSelector(state => state.orders.isLoading),
    isOpenAssignModal: useSelector(state => state.orders.isOpenAssignModal),
    sortableColumns: useSelector(state => state.orders.orders.params.sortableColumns),
    filteredCount: useSelector(state => state.orders.orders.filteredCount),
    count: useSelector(state => state.orders.orders.count),
    availableFilters: useSelector(state =>
      state.orders.orders.params.availableFilters.reduce((acc, filter) => {
        acc[filter.column] = filter;

        return acc;
      }, {}),
    ),
    filters: useSelector(state =>
      state.orders.orders.params.filters.reduce((acc, filter) => {
        acc[filter.column] = filter;

        return acc;
      }, {}),
    ),
    makeSetFilter,
    params,
    updateParams,
    clearFilter,
  };
};
