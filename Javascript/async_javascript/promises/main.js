// const movies = [
//   { title: "Soy leyenda", age: 13 },
//   { title: "Rey León", age: 3 },
//   { title: "La marca del Demonio", age: 18 },
//   { title: "A todo Gas", age: 8 },
// ];

const movies = [];

const getMovies = () => {
  return new Promise((resolve, reject) => {
    if (movies.length == 0) {
      reject(new Error("No data was found"));
    }
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
};

console.log("Loading...");

getMovies()
  .then((response) => {
    console.log("Data ready:");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
