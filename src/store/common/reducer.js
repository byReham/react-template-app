export const makeReducer =
  (handlers, initialState = null) =>
  // eslint-disable-next-line default-param-last
  (state = initialState, action) => {
    const handle = handlers[action.type];

    return handle ? handle(state, action) : state;
  };
