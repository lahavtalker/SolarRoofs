import { combineReducers } from "redux";
import searchReducer from "../reducers/searchReducer";
const osmId = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_OSM_ID":
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  valueSearch: searchReducer,
  osmId,
});
