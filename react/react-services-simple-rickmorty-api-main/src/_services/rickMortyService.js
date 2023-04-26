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

  await sleep(1000);
  return axios.get(apiUrl);
};

rickMortyService.getDetailCharacter = async (id) => {
  const apiUrl = `${BASE_URL}/character/${id}`;

  await sleep(2000);
  return axios.get(apiUrl);
};

rickMortyService.getEpisodes = async (url) => {
  return (await axios.get(url)).data;
};

export default rickMortyService;
