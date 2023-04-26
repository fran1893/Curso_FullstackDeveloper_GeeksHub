import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "./listPagination";
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
  // HOOKS
  const [characters, setCharacters] = useState([]);
  const listPaginationState = useSelector((state) => state.listPagination);
  let { page } = listPaginationState;
  const [pages, setPages] = useState(0);

  useEffect(() => {
    getAllCharacters(page);
  }, [page]);

  // FUNCTIONS
  const getAllCharacters = async (page) => {
    try {
      const response = await rickMortyService.getAllCharacters(page);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    } catch (error) {
      console.log(error.toString());
    }
  };

  // RETURN
  return (
    <>
      {characters[0] ? (
        <div className="CharactersList">
          <h2>Character List</h2>
          <NavPage
            page={page}
            pages={pages}
            increment={increment()}
            decrement={decrement()}
          />

          <div className="list">
            {characters.map((char) => (
              <Character key={char.id} character={char} />
            ))}
          </div>

          <NavPage
            page={page}
            pages={pages}
            increment={increment()}
            decrement={decrement()}
          />
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
