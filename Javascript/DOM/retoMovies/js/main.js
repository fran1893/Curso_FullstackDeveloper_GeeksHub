const movies = [
  { title: "Soy leyenda", age: 13 },
  { title: "Rey León", age: 3 },
  { title: "La marca del Demonio", age: 18 },
  { title: "A todo Gas", age: 8 },
];

const movieTable = document.getElementById("movies");

const renderMovies = (movies) => {
  let table = `<table>
<thead>
  <th>No.</th>
  <th>Movie Title</th>
  <th>Age</th>
</thead>
<tbody id="tbodyMovies">
</tbody>
</table>`;

  movieTable.innerHTML = table;

  const uiTbodyMovies = document.getElementById("tbodyMovies");

  movies.forEach((movie, i) => {
    uiTbodyMovies.innerHTML += `
  <tr>
    <td>${i + 1}</td>
    <td>${movie.title}</td>
    <td>${movie.age}</td>
  </tr>`;
  });
};

renderMovies(movies);