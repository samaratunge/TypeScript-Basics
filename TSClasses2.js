"use strict";
class Employee {
    display() {
        return 'Employee display';
    }
}
class Engineer extends Employee {
    display() {
        return 'Engineer display';
    }
}
const emp = new Employee();
console.log("Employee display = " + emp.display());
const eng = new Engineer();
console.log("Engineer display = " + eng.display());
class Polygon {
    toString() {
        return `Polygon[area=${this.calculateArea()}]`;
    }
}
class Circles extends Polygon {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circles(14.0);
console.log(`The area of the Circle is = ${circle.calculateArea()}`);
console.log(circle.toString());
//# sourceMappingURL=TSClasses2.js.map