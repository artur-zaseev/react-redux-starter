import { INCREMENT, DECREMENT } from "../types/counter";

const initState = {
  count: 5
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
