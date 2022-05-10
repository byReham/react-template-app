import { useEffect, useCallback, useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

const queryPropsMapper = {
  page: Number,
  pageSize: Number,
};

const convertParamsToSearch = params => {
  const query = new URLSearchParams();

  Object.keys(params).forEach(key => {
    if (Array.isArray(params[key])) {
      if (!params[key].length) return;

      query.set(key, params[key].join(','));
    } else {
      query.set(key, params[key]);
    }
  });

  return query.toString();
};

const deserializeSearchToParams = (search, initialParams) => {
  const params = { ...initialParams };

  new URLSearchParams(search).forEach((val, key) => {
    const value = MULTI_VALUE_FIELDS.includes(key) ? val.split(',').filter(Boolean) : val;

    if (!value?.length) return;

    params[key] = value;
  });

  return Object.keys(params).reduce((acc, key) => {
    acc[key] = queryPropsMapper[key] ? queryPropsMapper[key](params[key]) : params[key];

    return acc;
  }, {});
};

const useQuery = (initialParams = {}) => {
  const history = useHistory();
  const { search } = useLocation();

  const [params, setParams] = useState(() => deserializeSearchToParams(search, initialParams));

  useEffect(() => {
    history.push({ search: convertParamsToSearch(params) });
  }, [params]);

  const updateParams = useCallback((newParams, keysToClear = []) => {
    const paramsToSet = { ...params, ...newParams };

    keysToClear.forEach(key => {
      delete paramsToSet[key];
    });
    setParams(paramsToSet);
  }, []);

  return [params, updateParams];
};

export default useQuery;
