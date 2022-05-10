import client from '../utils/api';

import urls from './urls';

const index = params => client.get(urls.orders.index, params);

export default {
  index,
};
