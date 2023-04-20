import React, { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter() {
  // hooks
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("montado");
  }, []);

  useEffect(() => {
    console.log("actualizado");
  });

  useEffect(() => {
    console.log("dependencia");
    console.log("count dentro del useEffect " + count);
  }, [count]);

  // handles
  const handleClick = () => {
    setCount(() => count + 1);
    console.log("count", count);
  };

  return (
    <div className="Counter">
      <button onClick={handleClick}>Likes: {count}</button>
    </div>
  );
}
