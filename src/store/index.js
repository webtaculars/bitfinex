import { createStore, combineReducers } from "redux";

import tickerReducer from "./reducers/ticker";

const rootReducer = combineReducers({
  tickerData: tickerReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
