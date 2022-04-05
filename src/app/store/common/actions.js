export const asyncAction = (type) => ({
  run: (payload = null) => ({
    type: type.RUN,
    payload,
  }),
  success: (payload = null) => ({
    type: type.SUCCESS,
    payload,
  }),
  fail: (error) => ({
    type: type.FAIL,
    payload: { error },
  }),
});
