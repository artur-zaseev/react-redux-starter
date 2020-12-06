import { INCREMENT, DECREMENT } from "../types/counter";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const asyncDecrement = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 1000);
  };
};
