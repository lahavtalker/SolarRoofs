export default (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_BY_CITY":
      return { ...state, ...action.payload };
    case "SEARCH_BY_ADDRESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
