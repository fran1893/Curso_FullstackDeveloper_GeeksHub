import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List/List";
import { useState } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  // hooks
  const drinksInitial = ["cola", "water", "juice"];
  const [drinks, setDrinks] = useState(drinksInitial);

  let interruptor = true;
  let isLoading = false;

  const drinks2 = ["fanta", "pepsi", "sprite", "tuKola", "cachito"];

  const salute = (name) => {
    console.log("Hi", name);
  };
  const addDrink = (e) => {
    // console.log(e.target);
    setDrinks(() => [...drinks, "nuevo"]);
  };

  return (
    <div className="App">
      {interruptor === true && (
        <h1
          onClick={() => {
            salute("Bob");
          }}
        >
          Incluimos esto
        </h1>
      )}
      {isLoading ? (
        <div>
          <p>Loading..</p>
        </div>
      ) : (
        <div onClick={addDrink}>
          <p>Data ready 1</p>
          <p>Data ready 2</p>
          <p>Data ready 3</p>
        </div>
      )}

      <List list={drinks} />
      <hr />
      <List list={drinks2} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
