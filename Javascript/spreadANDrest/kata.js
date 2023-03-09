// Crea una función que transforme un String en
// mayúscula sin usar toLowerCase y toUpperCase
// de JavaScript, solo con la Tabla ASCII.

let spread = (nombre) => {
  let arr = [];
  let newCode;

  for (let i = 0; i < nombre.length; i++) {
    if (
      (nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 122) ||
      nombre[i].charCodeAt(0) == 241
    ) {
      newCode = nombre[i].charCodeAt(0) - 32;
      arr[i] = String.fromCharCode(newCode);
    } else {
      newCode = nombre[i].charCodeAt(0);
      arr[i] = nombre[i];
    }
  }
  return arr;
};

let nombre = "Javascript";
let resultado = spread([...nombre]);
let stringMayus = resultado.join("");
console.log(stringMayus);
