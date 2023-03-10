class Vehiculo {
  marca;
  matricula;
  numero_ruedas;
  numero_puertas;
  años;
  velocidad;

  constructor(
    marca,
    matricula,
    numero_ruedas,
    numero_puertas,
    años,
    velocidad
  ) {
    this.marca = marca;
    this.matricula = matricula;
    this.numero_ruedas = numero_ruedas;
    this.numero_puertas = numero_puertas;
    this.años = años;
    this.velocidad = velocidad;
  }

  race() {
    return (this.velocidad += 10);
  }
  break() {
    return (this.velocidad = 0);
  }
  park() {
    this.break()
    return console.log("Aparcado!");
  }
}

class Coche extends Vehiculo {
  consumo;
  constructor(marca, matricula, ruedas, puertas, años, velocidad, consumo) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
    this.consumo = consumo;
  }
}
class Moto extends Vehiculo {
  cilindrada;
  constructor(marca, matricula, ruedas, puertas, años, velocidad, cilindrada) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
    this.cilindrada = cilindrada;
  }
}
class Patin extends Vehiculo {
  color;
  constructor(marca, matricula, ruedas, años, velocidad, color) {
    super(marca, matricula, ruedas, años, velocidad);
    this.color = color;
  }
}
class Bicicleta extends Vehiculo {
  tipo_bici;
  constructor(marca, matricula, ruedas, años, velocidad, tipo_bici) {
    super(marca, matricula, ruedas, años, velocidad);
    this.tipo_bici = tipo_bici;
  }
}

const coche = new Coche("Ferrari", 123345, 4, 4, 2, 100, 3);
const moto = new Moto("Yamaha", 23243, 2, 0, 5, 50, "250cc");
const patin = new Patin("Velocity", 0, 2, 1, 20, "rojo");
const bici = new Bicicleta("Trek", 0, 2, 6, 40, "Mountain Bike");

console.log(coche);
console.log(coche.velocidad);
coche.race();
console.log(coche.velocidad);
coche.park();
console.log(coche.velocidad);
// console.log(moto);
// console.log(patin);
// console.log(bici);
