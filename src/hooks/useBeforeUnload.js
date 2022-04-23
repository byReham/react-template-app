import { useEffect } from 'react';

const useBeforeUnload = (
  when,
  message = "You are going to leave this page. The changes you've made won't be saved.",
) => {
  const beforeunload = (event = window.event) => {
    if (!when) return;

    const defaultMessage = 'Are you sure?';

    event.returnValue = message || defaultMessage;

    return message || defaultMessage;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', beforeunload);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
    };
  }, [when, message]);
};

export default useBeforeUnload;
