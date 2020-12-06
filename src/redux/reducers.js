import counter from "./reducers/counter.js";

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
  };
}
