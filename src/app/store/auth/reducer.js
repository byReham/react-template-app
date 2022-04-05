export function reducer(state = [], action) {
  switch (action.type) {
    case "USERS_INDEX_SUCCESS":
      return { ...state, index: action.payload };
    default:
      return state;
  }
}
