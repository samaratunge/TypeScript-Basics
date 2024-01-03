type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);

//Enums
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

const cars : {type : string, model : string, year : number} = {
    type : "Yoyota",
    model : "Corolla",
    year : 2023
};
console.log(cars);

const van : {type : string, milage? : number} = {
    type : "mazda"
}
van.milage = 123456;
console.log(van);

const nameAgeMap : {[index : string] : number} = {};
nameAgeMap.udara = 25;
nameAgeMap.nimal = 50;
nameAgeMap.ann = 30.5;
console.log(nameAgeMap);