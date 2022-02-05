import { createStore } from "redux";
import rootReducers from "../reducers";

const store = createStore(rootReducers);
console.log(store.getState());

export default store;
