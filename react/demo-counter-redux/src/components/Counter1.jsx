import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "../actions";

export default function Counter1() {
  // hooks
  const counterState = useSelector((state) => state.counter1);
  const dispatch = useDispatch();

  const myStyles = {
    color: "red",
    fontSize: "1.2em",
  };

  //   Handlers
  const handleIncrement = () => {
    dispatch(increment1());
  };

  const handleDecrement = () => {
    dispatch(decrement1());
  };

  return (
    <>
      <h2>
        Counter 1: <span style={myStyles}>{counterState}</span>
      </h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
