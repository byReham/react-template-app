import client from '../utils/api';

import urls from './urls';

const loginUser = body => client.post(urls.users.signIn, body);
const createUser = body => client.post(urls.users.signUp, body);
const logOutUser = () => client.post(urls.users.signOut);

export default {
  loginUser,
  createUser,
  logOutUser,
};
