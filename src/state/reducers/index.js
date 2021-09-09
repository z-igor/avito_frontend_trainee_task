import { combineReducers } from "redux";
import { creatorReducer } from "./reducer";

export default combineReducers({
  news: creatorReducer,
});
