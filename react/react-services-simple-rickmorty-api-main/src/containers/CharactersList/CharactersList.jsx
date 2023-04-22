import React, { useEffect, useState } from "react";
import Character from "../../components/Character/Character";
import "./CharactersList.scss";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../../components/NavPage/NavPage";

export default function CharactersList() {

   // hooks
   const [characters, setCharacters] = useState([]);
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
         <h2>Character List</h2>
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
