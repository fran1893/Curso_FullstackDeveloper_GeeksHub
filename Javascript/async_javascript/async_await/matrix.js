const getFilm = () => new Promise((res, rej) => res("Matrix"));
const getMain = (film) =>
  new Promise((res, rej) => {
    film === "Matrix" ? res("Neo") : rej("404");
  });

// Sin async await
// getFilm()
//   .then((film) => getMain(film))
//   .then((main) => console.log(main))
//   .catch((err) => console.log(err));

//  Con async await
const queue = async () => {
  try {
    const film = await getFilm();
    const main = await getMain(film);
    console.log(main);
  } catch (err) {
    console.log(err);
  }
};
queue();
