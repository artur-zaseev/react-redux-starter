import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import combineReducers from "./reducers.js";

let store;

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.devToolsExtension)) {
  store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
} else {
  store = createStore(
    combineReducers,
    compose(
      applyMiddleware(thunkMiddleware),
      (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
        (window.devToolsExtension && window.devToolsExtension())
    )
  );
}

export default store;
