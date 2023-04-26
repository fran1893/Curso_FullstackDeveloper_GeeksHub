import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const myStyles = {
  color: "red",
  fontWeight: "bold",
};

export default function Counter() {
  // hooks
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  let { value } = counterState;
  let payload = 10;

  // handlers
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(payload));
  };
  return (
    <div>
      <h2>
        Counter #1:
        <span style={myStyles}>({value})</span>
      </h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrementByAmount}>+{payload}</button>
    </div>
  );
}
