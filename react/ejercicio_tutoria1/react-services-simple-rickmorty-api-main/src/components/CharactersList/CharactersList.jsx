import React, { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./CharactersList.scss";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../NavPage/NavPage";

export default function CharactersList() {
   const initialCharacters = [
      {
         id: 1,
         name: "Rick Sanchez",
         image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
         id: 2,
         name: "Morty Smith",
         image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
         id: 3,
         name: "Summer Smith",
         image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
         id: 3,
         name: "Summer Smith",
         image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
   ];

   // hooks
   const [characters, setCharacters] = useState(initialCharacters);
   const [page, setPage] = useState(1);
   const [pages, setPages] = useState(0);

   useEffect(() => {
      getAllCharacters(page);
   }, [page]);

   // functions
   const getAllCharacters = async (page) => {
      try {
         const response = await rickMortyService.getAllCharacters(page);
         setCharacters(response.data.results);
         setPages(response.data.info.pages);
      } catch (error) {
         console.log(error.toString());
      }
   };

   return (
      <div className="CharactersList">
         <NavPage page={page} pages={pages} setPage={setPage} />

         <div className="list">
            {characters.map((char) => (
               <Character key={char.id} character={char} />
            ))}
         </div>

         <NavPage page={page} pages={pages} setPage={setPage} />
      </div>
   );
}
