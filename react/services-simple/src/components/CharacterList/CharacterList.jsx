import React, { useEffect, useState } from "react";
import rickMortyService from "../../_services/rickMortyServices";
import "./CharacterList.css";

export default function CharacterList() {
  const initialCharacters = [
    { id: 1, name: "Rick Sanchez" },
    { id: 2, name: "Morty Smith" },
    { id: 3, name: "Summer Smith" },
  ];

  //   HOOKS
  const [characters, setCharacters] = useState(initialCharacters);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxpages] = useState();

  useEffect(() => {
    getAllCharacters(page);
  }, [page]);

  //   FUNCTIONS
  const getAllCharacters = async (page) => {
    try {
      const response = await rickMortyService.getAllCharacters(page);
      setCharacters(response.data.results);
      setMaxpages(response.data.info.pages);
    } catch (error) {
      console.log(error.toString());
    }
  };
  //   HANDLERS
  const handleNext = () => {
    if (page < maxPages) setPage(() => page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(() => page - 1);
  };
  return (
    <div className="CharacterList">
      <button onClick={handlePrev} disabled={page == 1}>
        prev
      </button>

      <span className="page">
        page:{page} (max: {maxPages})
      </span>

      <button onClick={handleNext} disabled={page == maxPages}>next</button>
      <ul className="characters-list">
        {characters.map((char) => (
          <li key={char.id}>
            {char.id} - {char.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
