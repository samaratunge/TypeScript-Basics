class Person{
    private name : string;
    private age : number;
    public readonly value : string;

    public constructor(name : string, age : number, value : string){
        this.name = name;
        this.age = age;
        this.value = value;
    }
    public getName() : string{
        return this.name;
    }
    public getAge() : number{
        return this.age;
    }
}
const person = new Person("Udara", 25, "Good");
console.log("Your name is = " + person.getName());
console.log("Your age is = " + person.getAge());
console.log("You are " + person.value);

interface IShape{
    getArea: () => number;
}
interface IColor{
    getColor() : string;
}

class Rectangles implements IShape, IColor{

    public constructor(public readonly width: number, public readonly height: number, public readonly color : string){}

    public getArea() : number{
        return this.width * this.height;
    }

    public getColor(): string {
        return this.color;
    }
}
class Square extends Rectangles{
    public constructor(public width : number, public color : string){
        super(width, width, color);
    }    
}
const rect = new Rectangles(10, 20, 'red');
console.log(`Area of the Rectangle is = ${rect.getArea()} and color is ${rect.getColor()}`);
const square = new Square(30, 'Blue');
console.log(`Area of the Square is = ${square.getArea()} and color is ${square.getColor()}`);
