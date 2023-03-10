class Person {
  // PROPIEDADES DE CLASE
  #name;
  #age;
  profession;
  nationality;

  // CONSTRUCTOR
  constructor(name, age, profession, nationality) {
    this.#name = name;
    this.#age = age;
    this.profession = profession;
    this.nationality = nationality;
  }

  // METODO DE LA CLASE
  greating() {
    return `Hola!! Mi nombre es ${this.#name}, tengo ${this.#age} años, soy ${
      this.nationality
    } y mi profesión es ${this.profession}`;
  }

  // GETTERS Y SETTERS
  getName() {
    return this.#name;
  }
  setName(newName) {
    this.#name = newName;
  }

  getAge() {
    return this.#age;
  }
  setAge(newAge) {
    this.#age = newAge;
  }

  // TO ARRAY
  toArray() {
    return [this.#name, this.#age, this.profession, this.nationality];
  }
}

const person1 = new Person("Eduardo", 49, "Taxista", "Uruguayo");

person1.setName("Francisco");
console.log(person1.greating());
console.log(person1.toArray());
