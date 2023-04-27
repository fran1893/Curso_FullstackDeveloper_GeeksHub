import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementDetail,
  decrementDetail,
  setDetail,
} from "../CharactersList/listPagination";
import { dateFormat } from "../../_util/util";
import rickMortyService from "../../_services/rickMortyService";
import NavPage from "../../components/NavPage/NavPage";
import "./CharacterDetail.scss";
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

export default function CharacterDetail() {
  // HOOKS
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const listPaginationState = useSelector((state) => state.listPagination);
  let { pageDetail } = listPaginationState;
  const dispatch = useDispatch();
  const [pages, setPages] = useState(0);
  const [episodes, setEpisodes] = useState([]);
  let payload = +id;

  useEffect(() => {
    dispatch(setDetail(payload));
  }, []);

  useEffect(() => {
    getPages();
    getDetailCharacter(pageDetail);
  }, [pageDetail]);

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
              <b>CREATED:</b> {dateFormat(character.created)}
            </p>
            <p>
              <b>EPISODES:</b>
            </p>
            <table className="episodesTable">
              <tr>
                <th>Episodes ({episodes.length})</th>
                <th>Title</th>
              </tr>
              {episodes.map((epi) => {
                return (
                  <tr key={epi.id}>
                    <td>{epi.episode}</td>
                    <td>{epi.name}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <hr />
          <NavPage
            page={pageDetail}
            pages={pages}
            increment={incrementDetail()}
            decrement={decrementDetail()}
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
