import React, { useEffect, useState } from "react";
import rickMortyService from "../../_services/rickMortyServices";
// HOOKS
const [page, setPage] = useState(1);
const [maxPages, setMaxpages] = useState();

//   FUNCTIONS
const getAllCharacters = async (page) => {
  try {
    const response = await rickMortyService.getAllCharacters(page);
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

export default function NavPag() {
  return (
    <div className="NavPag">
      <div className="CharacterList">
        <button onClick={handlePrev} disabled={page == 1}>
          prev
        </button>

        <span className="page">
          page:{page} (max: {maxPages})
        </span>

        <button onClick={handleNext} disabled={page == maxPages}>
          next
        </button>
      </div>
    </div>
  );
}
