import React from "react";
import { useSelector } from "react-redux";

export default function Listener() {
  const globalState = useSelector((state) => state);
  return (
    <div style={{ textAlign: "left" }}>
        <h2>Listener</h2>
      <pre>{JSON.stringify(globalState, null, 2)}</pre>
    </div>
  );
}
