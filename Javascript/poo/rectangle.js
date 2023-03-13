class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}

const rectangle1 = new Rectangle(10, 20);
rectangle1.sayName();
// get javascript
console.log("Usando get Javascript " + rectangle1.area);
// set javascript
rectangle1.area = 5;
console.log("Usando set Javascript " + rectangle1.area);
