import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const rickMortyService = {};

rickMortyService.getAllCharacters = async (page = 1) => {
  const apiUrl = `${BASE_URL}/character/?page=${page}`;

  return await axios.get(apiUrl);
};

rickMortyService.getDetailCharacter = async (id) => {
  const apiUrl = `${BASE_URL}/character/${id}`;

  return await axios.get(apiUrl);
};

export default rickMortyService;
