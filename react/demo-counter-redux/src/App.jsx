import { useState } from "react";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Listener from "./components/Listener";

function App() {
  return (
    <>
      <h1>Redux</h1>
      <Counter1 />
      <Counter2 />
      <Listener />
    </>
  );
}

export default App;
