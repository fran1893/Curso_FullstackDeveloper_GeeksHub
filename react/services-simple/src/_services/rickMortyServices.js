import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const rickMortyService = {};

rickMortyService.getAllCharacters = async (page = 1) => {
  const apiURL = `${BASE_URL}/character?page=${page}`;

  return await axios.get(apiURL);
};

export default rickMortyService;
