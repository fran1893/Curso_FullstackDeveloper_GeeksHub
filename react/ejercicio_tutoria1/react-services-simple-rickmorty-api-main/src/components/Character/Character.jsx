import React from "react";

export default function Character({ character }) {
   return (
      <div>
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
