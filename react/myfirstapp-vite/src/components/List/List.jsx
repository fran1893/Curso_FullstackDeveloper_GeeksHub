import React from "react";
import "./List.css";

export default function List(props) {
  // console.log(props);
  const drinks = props.list;

  return (
    <div className="List">
      <p>Lista</p>
      <ul>
        {drinks.map((liquid, index) => (
          <li key={index}>
            {index + 1}-{liquid}
          </li>
        ))}
      </ul>
    </div>
  );
}
