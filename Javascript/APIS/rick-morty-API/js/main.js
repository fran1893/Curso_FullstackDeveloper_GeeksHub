const uiCharacters = document.getElementById("characters");


// Función para mostrar todos los personajes
const renderAllCharacters = (characters) => {
  let charStr = "";
  for (char of characters) {
    charStr += `<div class="col">
    <div class="card text-center">
      <img src="${char.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${char.name}</h5>
        <a href="#" onClick="getOneCharacter(${char.id})" class="btn btn-primary">More Info</a>
      </div>
    </div>
  </div>`;
  }
  uiCharacters.innerHTML = charStr;
};

// Función para mostrar un personaje solo
const renderOneCharacter = (char) => {
  let charStr = "";

  charStr += `<div class="col">
      <div class="card text-center">
        <img src="${char.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${char.name}</h5>
          <p>
          <b>Status:</b> ${char.status}<br>
          <b>Gender:</b> ${char.gender}<br>
          <b>Specie:</b> ${char.species}<br>
          <b>Origin:</b> ${char.origin.name}<br>
          </p>
          <a href="#" onClick="getAllCharacters()" class="btn btn-primary">Return to Home screen</a>
        </div>
      </div>
    </div>`;
  uiCharacters.innerHTML = charStr;
};

// Función que busca la API de todos los personajes, 
// la transforma en JSON y la envia como parametro a la función "renderAllCaracters" para mostrarlos por pantalla
const getAllCharacters = () => {
  const API_URL = "https://rickandmortyapi.com/api/character";

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      renderAllCharacters(characters);
    });
};


// Función que busca la API de un personaje específico tomando como parametro el id del personaje, 
// la transforma en JSON y la envia como parametro a la función "renderOneCaracter" para mostrarlos por pantalla
// Se activa al hacer click en el boton de cada personaje
const getOneCharacter = (id) => {
  const API_URL = `https://rickandmortyapi.com/api/character/${id}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const character = data;
      renderOneCharacter(character);
    });
};


// Llamada a la funcion para mostrar todos los personajes en pantalla
getAllCharacters();
