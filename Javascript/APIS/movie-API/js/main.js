// SPINNER LOADIING
class Spinner {
  #uiSpinner;
  constructor() {
    this.#uiSpinner = null;
  }

  #render() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="spinnerContainer"><div id="spinnerID" class="spinner"></div></div>`
    );
    this.#uiSpinner = document.getElementById("spinnerContainer");
  }

  present() {
    this.#render();
  }

  dissmis() {
    if (this.#uiSpinner) {
      this.#uiSpinner.parentNode.removeChild(this.#uiSpinner);
    }
  }
}

// API KEY
const API_KEY = "28c2606a3d599a82ec3463e9fd8fb8b7";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// FUNCION CON AXIOS PARA SACAR TODAS LAS PELICULAS POPULARES
const getPopularMovies = async () => {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const spinner = new Spinner();
    // Activar spinner
    spinner.present();

    const response = await axios.get(API_URL);

    // Desactivar spinner
    spinner.dissmis();

    const movies = response.data.results; // Con axios siempre hay que entrar a .data para hacer al json
    const uiMovies = document.getElementById("movies");
    uiMovies.innerHTML = "";
    movies.forEach((movie) => {
      const imagesBaseURL = "https://image.tmdb.org/t/p";
      uiMovies.innerHTML += `
    <div class="movie">
       <div class="movieImage"><img src="${imagesBaseURL}/w500${movie.poster_path}" alt=""></div>
       <div class="movieTitle"><h2>${movie.original_title}<h2></div>
       <div class="moviePreview"><p><b>Overview: </b>${movie.overview}</p></div>
       <div class="movieYear"><p><b>Año de la Película: </b>${movie.release_date}</p></div>
    </div>`;
    });
  } catch (error) {
    console.error(error);
  }
};

const getUpcomingMovies = async () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=28c2606a3d599a82ec3463e9fd8fb8b7&language=en-US&page=1";
  try {
    const spinner = new Spinner();
    // Activar spinner
    spinner.present();

    const response = await axios.get(API_URL);

    // Desactivar spinner
    spinner.dissmis();

    const upcomingMovies = response.data.results;
    const uiMovies = document.getElementById("movies");
    const imagesBaseURL = "https://image.tmdb.org/t/p";
    const uiUpcomingButton = document.getElementById("upcomingButton");
    uiMovies.innerHTML = "";
    upcomingMovies.forEach((movie) => {
      uiMovies.innerHTML += `
        <div class="movie">
           <div class="movieImage"><img src="${imagesBaseURL}/w500${movie.poster_path}" alt=""></div>
           <div class="movieTitle"><h2>${movie.original_title}<h2></div>
           <div class="moviePreview"><p><b>Overview: </b>${movie.overview}</p></div>
           <div class="movieYear"><p><b>Año de la Película: </b>${movie.release_date}</p></div>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

getPopularMovies();
