"use strict";
class Person {
    constructor(name, age, value) {
        this.name = name;
        this.age = age;
        this.value = value;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person = new Person("Udara", 25, "Good");
console.log("Your name is = " + person.getName());
console.log("Your age is = " + person.getAge());
console.log("You are " + person.value);
class Rectangles {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.width * this.height;
    }
    getColor() {
        return this.color;
    }
}
class Square extends Rectangles {
    constructor(width, color) {
        super(width, width, color);
        this.width = width;
        this.color = color;
    }
}
const rect = new Rectangles(10, 20, 'red');
console.log(`Area of the Rectangle is = ${rect.getArea()} and color is ${rect.getColor()}`);
const square = new Square(30, 'Blue');
console.log(`Area of the Square is = ${square.getArea()} and color is ${square.getColor()}`);
//# sourceMappingURL=TSClasses.js.map