import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const rickMortyService = {};

const sleep = (ms) => {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
};

rickMortyService.getAllCharacters = async (page = 1) => {
  const apiUrl = `${BASE_URL}/character/?page=${page}`;

  return await axios.get(apiUrl);
};

rickMortyService.getDetailCharacter = async (id) => {
  const apiUrl = `${BASE_URL}/character/${id}`;

  return await axios.get(apiUrl);
};

rickMortyService.getEpisodes = async (url) => {
  return (await axios.get(url)).data;
};

export default rickMortyService;
