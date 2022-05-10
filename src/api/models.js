import client from '../utils/api';

import urls from './urls';

const index = params => client.get(urls.models.index, params);

export default {
  index,
};
