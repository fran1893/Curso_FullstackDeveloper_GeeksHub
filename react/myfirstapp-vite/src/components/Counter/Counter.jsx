import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div className="Counter">
      <button onClick={handleClick}>Likes: {count}</button>
    </div>
  );
}
