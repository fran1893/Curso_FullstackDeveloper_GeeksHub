import React from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
   const { id } = useParams();
   return (
      <div>
         <h1>Character details</h1>
         <h2>id: {id}</h2>
      </div>
   );
}
