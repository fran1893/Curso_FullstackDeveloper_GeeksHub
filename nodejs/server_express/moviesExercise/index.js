// Ejercicio MOVIES

// Ruta “/movies”
// ○ Te devuelve un JSON todo el listado
// de películas.
// ● Ruta “/movie/:id”
// ○ Te devuelve la película con el mismo
// id del parámetro.
// ● Ruta “movie?query=””
// ○ Devuelve todas las coincidencias por
// titulo

//
//     1:"Soy leyenda",
//     2:"Rey León",
//     3:"La Marca del Demonio.",
//     4:"A todo Gas",
//     5:"El Risas",
//     6:"El Brujo",
//     7:"Rey de la Montaña",
//     8:"Soy el Rey del Mundo."
//

const express = require("express");
const app = express();
const PORT = 3000;

const movies = [
  {
    id: 1,
    title: "Soy leyenda",
  },
  {
    id: 2,
    title: "Rey léon",
  },
  {
    id: 3,
    title: "La marca del demonio",
  },
  {
    id: 4,
    title: "A todo gas",
  },
  {
    id: 5,
    title: "El risas",
  },
  {
    id: 6,
    title: "El brujo",
  },
  {
    id: 7,
    title: "Rey de la montaña",
  },
  {
    id: 8,
    title: "Soy el rey del mundo",
  },
];

// Ruta “/movies”
// ○ Te devuelve un JSON todo el listado
// de películas.
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Ruta “/movie/:id”
// Te devuelve la película con el mismo
// id del parámetro.

app.get("/movie/:id", (req, res) => {
  const { id } = req.params;

  const foundMovie = movies.find((movie) => movie.id === +id);
  if (foundMovie) {
    res.json(foundMovie);
  } else {
    res.send(`Can't find the movie with id = ${id}`);
  }
});

// Ruta “movie?title=””
// Devuelve todas las coincidencias por
// titulo

// METODO 1
// app.get("/movie", (req, res) => {
//   const { title } = req.query;
//   let moviesFound = [];

//   movies.forEach((movie) => {
//     if (movie.title.includes(title)) {
//       moviesFound.push(movie);
//     }
//   });

//   res.json(moviesFound);
// });

// METODO 2
app.get("/movie", (req, res) => {
  const { title } = req.query;
  const moviesList = movies.filter((movie) =>
    movie.title.toUpperCase().includes(title.toUpperCase())
  );

  if (moviesList.length != 0) {
    res.json(moviesList);
  } else {
    res.send(`Can't find movies that contain in the title ${title}`);
  }
});

app.listen(PORT, () => console.log(`Servidor levantado en ${PORT}`));
