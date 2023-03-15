let num1 = 4;
let num2 = 6;

// funcion callback
const callback = (r) => {
  console.log(r);
};

// función sumar con argumento callback

const sumar = (a, b, cb) => {
  const resul = a + b;

  setTimeout(() => {
    cb(resul);
  }, 1000);
};


// llamada a la funcion sumar
console.log("start");
sumar(num1,num2,callback);
console.log("end");
