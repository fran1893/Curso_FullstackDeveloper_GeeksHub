import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <h1>Rick and Morty API</h1>
      <div className="buttons">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
    </div>
  );
}
