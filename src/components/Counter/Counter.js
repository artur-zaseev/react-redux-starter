import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  asyncDecrement,
} from "../../redux/actions/counter";
import "./Counter.css";

export const Counter = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <div className="data">counter value: {count}</div>
      <button className="add" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="sub" onClick={() => dispatch(increment())}>
        +
      </button>
      <button
        className="async-decrement"
        onClick={() => dispatch(asyncDecrement())}
      >
        asyncDecrement
      </button>
    </div>
  );
};
