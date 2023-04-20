import { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {

  return (
    <div className="App">
      <h1>Rick and Morty list</h1>
      <CharacterList />
    </div>
  );
}

export default App;
