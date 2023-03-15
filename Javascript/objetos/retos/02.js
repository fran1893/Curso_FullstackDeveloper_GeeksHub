// Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.

const allPlanets = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Saturno",
  "Urano",
  "Neptuno",
];

const printPlanets = (planets) => {
  planets.forEach((planet, i) => {
    console.log(`El ${i + 1}º planeta es: ` + planet);
  });
};

printPlanets(allPlanets);
