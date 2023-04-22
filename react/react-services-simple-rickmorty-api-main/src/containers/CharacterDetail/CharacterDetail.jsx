import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../../components/NavPage/NavPage";
import "./CharacterDetail.scss";

export default function CharacterDetail() {
  // HOOKS
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [page, setPage] = useState(+id);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    getPages();
    getDetailCharacter(page);
  }, [page]);

  //   FUNCTIONS
  const getDetailCharacter = async (id) => {
    try {
      const response = await rickMortyService.getDetailCharacter(id);
      setCharacter(response.data);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const getPages = async () => {
    try {
      const response = await rickMortyService.getAllCharacters();
      setPages(response.data.info.count);
    } catch (error) {
      console.log(error.toString());
    }
  };

  // RETURN
  return (
    <div className="CharacterDetail">
      <div className="card">
        <h1>{character.name}</h1>
        <img src={character.image} alt="" className="card-img-top"/>
        <p>STATUS: {character.status}</p>
        <p>SPECIES: {character.species}</p>
        <p>GENDER: {character.gender}</p>
      </div>
      <hr />
      <NavPage page={page} pages={pages} setPage={setPage} />
    </div>
  );
}
