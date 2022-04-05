const makeCookieGetter = (key, deserialize = value => value) => {
  const getCookie = () => document.cookie.split(';').find(a => a.includes(key));

  return {
    value: () => {
      const aCookie = getCookie();

      if (!aCookie) return null;

      const value = aCookie.split('=')[1];

      if (!value) return null;

      return deserialize(value);
    },
  };
};

export const user = makeCookieGetter('user', value => JSON.parse(decodeURIComponent(value)));

export const isAdmin = () => user.value().role === 'ADMIN';
