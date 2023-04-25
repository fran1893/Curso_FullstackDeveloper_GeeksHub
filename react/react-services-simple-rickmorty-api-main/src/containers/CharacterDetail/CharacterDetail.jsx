import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../../components/NavPage/NavPage";
import "./CharacterDetail.scss";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  position: "absolute",
  left: "50%",
  right:"50%",
  top: "50%",
  bottom: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
};

export default function CharacterDetail() {
  // HOOKS
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [page, setPage] = useState(+id);
  const [pages, setPages] = useState(0);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getPages();
    getDetailCharacter(page);
  }, [page]);

  // useEffect(() => {
  //   getEpisodes()
  // }, []);

  //   FUNCTIONS
  async function getDetailCharacter(id) {
    try {
      const response = await rickMortyService.getDetailCharacter(id);
      getEpisodes(response.data.episode);
      setCharacter(response.data);
    } catch (error) {
      console.log(error.toString());
    }
  }

  const getPages = async () => {
    try {
      const response = await rickMortyService.getAllCharacters();
      setPages(response.data.info.count);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const getEpisodes = async (episodesUrls) => {
    let espisodesObj = [];

    for (const episodeUrl of episodesUrls) {
      const response = await rickMortyService.getEpisodes(episodeUrl);
      espisodesObj.push(response);
    }
    setEpisodes(espisodesObj);
  };

  // RETURN
  return (
    <>
      {character.id ? (
        <div className="CharacterDetail">
          <div className="card">
            <h1>{character.name}</h1>
            <img src={character.image} alt="" className="card-img-top" />
            <p>
              <b>STATUS:</b> {character.status}
            </p>
            <p>
              <b>SPECIES:</b> {character.species}
            </p>
            <p>
              <b>GENDER:</b> {character.gender}
            </p>
            <p>
              <b>ORIGIN:</b> {character.origin.name}
            </p>
            <p>
              <b>LOCATION:</b> {character.location.name}
            </p>
            <p>
              <b>EPISODES:</b>
            </p>
            {episodes.map((epi) => {
              return (
                <div key={epi.id}>
                  <b>{epi.episode}</b> - {epi.name}
                </div>
              );
            })}
          </div>
          <hr />
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
