import React from "react";
import "./Character.scss";
import { useNavigate } from "react-router-dom";

export default function Character({ character }) {
  const navigate = useNavigate();
  // HANDLERS
  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="Character">
      <div className="card" onClick={handleClick} style={{ width: "13rem" }}>
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
        </div>
      </div>
    </div>
  );
}
