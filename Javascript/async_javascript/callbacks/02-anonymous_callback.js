let num1 = 4;
let num2 = 6;

// función sumar con argumento callback

const sumar = (a, b, cb) => {
  const resul = a + b;

  setTimeout(() => {
    cb(resul);
  }, 1000);
};

// llamada a la funcion sumar con la función anónima como parametro
console.log("start");

sumar(num1, num2, (r) => {
  console.log(r);
});

console.log("end");
