import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counter2Slice";

const myStyles = {
  color: "blue",
  fontWeight: "bold",
};

export default function Counter2() {
  // hooks
  const counter2State = useSelector((state) => state.counter2);
  const dispatch = useDispatch();
  let { data } = counter2State;
  let payload = -10;

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
        <span style={myStyles}>({data})</span>
      </h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrementByAmount}>{payload}</button>
    </div>
  );
}
