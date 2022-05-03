import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const ConfigStore = () => {
  const store = createStore(applyMiddleware(thunk, logger));
  return store;
};

export default ConfigStore;
