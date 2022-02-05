import { combineReducers } from "redux";
import countReducer from "./countReducer";
import postsReducer from "./postsReducer";

const rootReducers = combineReducers({
  countReducer,
  postsReducer,
});

export default rootReducers;
