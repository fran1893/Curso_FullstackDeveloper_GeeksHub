import React, { useEffect, useState } from "react";
import Character from "../../components/Character/Character";
import "./CharactersList.scss";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../../components/NavPage/NavPage";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  position: "absolute",
  left: "50%",
  right: "50%",
  top: "50%",
  bottom: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
};

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
    <>
      {characters[0] ? (
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
      ) : (
        <CircleLoader
          color={"#36d7b7"}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}
