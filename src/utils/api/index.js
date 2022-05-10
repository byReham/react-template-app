import AXIOS from 'axios';

import urls from '../../api/urls';
import { API_CODES } from '../../constants';

import buildApiClient from './client';

const axios = AXIOS.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/core/admin`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axios.interceptors.request.use(config => {
  const jwt = localStorage.getItem('jwt');

  return jwt ? { ...config, headers: { Authorization: jwt } } : config;
});

axios.interceptors.response.use(
  res => res,
  error => {
    if (error.code === 'ECONNABORTED' || !error.response) {
      Object.assign(error, { response: { statusText: 'Network timeout error' } });
    } else if (error.response.status === API_CODES.unauthorized) {
      localStorage.removeItem('jwt');
      window.location.href = urls.users.signIn;
    }

    throw error;
  },
);

export default buildApiClient(axios);
