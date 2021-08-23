import { createStore, compose } from "redux";
import reducer from "./reducer.js";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = composeEnhancers();
const store = createStore(reducer, enhancer);

export default store;
