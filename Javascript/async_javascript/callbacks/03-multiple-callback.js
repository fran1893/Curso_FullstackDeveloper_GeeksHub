// Declaración de variables
let num1 = 4;
let num2 = 6;

// función callback
const callback = (r, cb2) => {
  console.log(r);
  setTimeout(() => {
    cb2(r);
  }, 1000);
};

// función callback que iría dentro del primer callback
const callback2 = (r2) => {
  console.log(r2 ** 2);
};

// función sumar con argumento callback

const sumar = (a, b, cb) => {
  const resul = a + b;

  setTimeout(() => {
    cb(resul, callback2);
  }, 1000);
};

// llamada a la funcion sumar
console.log("start");
sumar(num1, num2, callback);
console.log("end");
