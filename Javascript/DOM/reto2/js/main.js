const randMinMax = (min, max) => Math.round(Math.random() * (max - min)) + min;

class Car {
   #color;
   #model;
   #speed;
   #uiCar;
   #position;
   static #numberOfCars = 0;
   constructor(model = "Default", color = "black") {
      this.#model = model;
      this.#color = color;
      this.#speed = randMinMax(1, 10);
      console.log(this.#speed); //TODO borrar
      this.#position = 0;
      Car.#numberOfCars++;
      console.log(Car.#numberOfCars);
      this.#setUiCar();
   }

   #setUiCar() {
      this.#uiCar = document.createElement("div");
      this.#uiCar.classList.add("car");
      this.#uiCar.innerText = this.#model;
      this.#uiCar.style.backgroundColor = this.#color;
      this.#uiCar.style.left = this.#position + "px";
      this.#uiCar.style.top = (Car.#numberOfCars - 1) * 60 + "px";
      document.getElementById("container").appendChild(this.#uiCar);
   }

   get speed() {
      return this.#speed;
   }

   get uiCar() {
      return this.#uiCar;
   }

   get position() {
      return this.#position;
   }

   set position(position) {
      this.#position = position;
   }
}

// cars
const car1 = new Car("Ferrary", "#04B486");
const car2 = new Car("Nuevo", "red");
const car3 = new Car();

document.getElementById("testspeed").innerHTML = `
      <pre>${JSON.stringify(
         {
            "speed 1": car1.speed,
            "speed 2": car2.speed,
            "speed 3": car3.speed,
         },
         null,
         2
      )}</pre>
      `;
//
//
const myMove = () => {
   let idFrames = null;

   let hasFinished1 = false;
   let hasFinished2 = false;
   let hasFinished3 = false;

   clearInterval(idFrames);

   const frame = () => {
      console.log("frame");

      if (car1.position >= 350) {
         hasFinished1 = true;
      } else {
         car1.position += car1.speed;
         car1.uiCar.style.left = car1.position + "px";
      }

      if (car2.position >= 350) {
         hasFinished2 = true;
      } else {
         car2.position += car2.speed;
         car2.uiCar.style.left = car2.position + "px";
      }

      if (car3.position >= 350) {
         hasFinished3 = true;
      } else {
         car3.position += car3.speed;
         car3.uiCar.style.left = car3.position + "px";
      }

      if (hasFinished1 && hasFinished2 && hasFinished3) {
         console.log("end");
         clearInterval(idFrames);
      }

      document.getElementById("testpos").innerHTML = `
      <pre>${JSON.stringify(
         {
            "pos 1": car1.position,
            "pos 2": car2.position,
            "pos 3": car3.position,
         },
         null,
         2
      )}</pre>
      `;
   };

   idFrames = setInterval(frame, 10);
};