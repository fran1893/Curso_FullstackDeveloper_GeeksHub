import React from "react";
import "./Character.scss";

export default function Character({ character }) {
   return (
      <div className="Character">
         <div className="card" style={{ width: "13rem" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{character.name}</h5>
               <p>{character.status}</p>
               <a className="btn btn-primary">More</a>
            </div>
         </div>
      </div>
   );
}
