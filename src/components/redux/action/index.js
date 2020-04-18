export const searchByCity = (cityBld) => {
  return {
    type: "SEARCH_BY_CITY",
    payload: cityBld,
  };
};
export const searchByAddress = (itemBld) => {
  return {
    type: "SEARCH_BY_ADDRESS",
    payload: itemBld,
  };
};
