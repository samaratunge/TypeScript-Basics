class Employee{

    public  display() : string{
        return 'Employee display';
    }
}
class Engineer extends Employee{

    public override display(): string {
        return 'Engineer display';
    }
}
const emp = new Employee();
console.log("Employee display = " + emp.display());
const eng = new Engineer();
console.log("Engineer display = " + eng.display());

abstract class Polygon {
    public abstract calculateArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.calculateArea()}]`;
    }
  }
  class Circles extends Polygon {
    public constructor(protected readonly radius: number) {
      super();
    }
    public calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  const circle = new Circles(14.0);
  console.log(`The area of the Circle is = ${circle.calculateArea()}`);
  console.log(circle.toString());