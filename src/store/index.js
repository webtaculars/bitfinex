import { createStore, combineReducers } from "redux";

import wsConnectionReducer from "./reducers/wsConnection";
import tickerReducer from "./reducers/ticker";
import tradesReducer from "./reducers/trades";

const rootReducer = combineReducers({
  wsConnectionData: wsConnectionReducer,
  tickerData: tickerReducer,
  tradesData: tradesReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
