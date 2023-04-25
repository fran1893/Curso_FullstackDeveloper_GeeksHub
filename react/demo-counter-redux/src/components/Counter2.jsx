import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2 } from "../actions";

export default function Counter2() {
  // hooks
  const counterState = useSelector((state) => state.counter2);
  const dispatch = useDispatch();

  const myStyles = {
    color: "red",
    fontSize: "1.2em",
  };

  //   Handlers
  const handleIncrement = () => {
    dispatch(increment2());
  };

  const handleDecrement = () => {
    dispatch(decrement2());
  };

  return (
    <>
      <h2>
        Counter 2: <span style={myStyles}>{counterState}</span>
      </h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
