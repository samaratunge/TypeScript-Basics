"use strict";
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);
//Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
const cars = {
    type: "Yoyota",
    model: "Corolla",
    year: 2023
};
console.log(cars);
const van = {
    type: "mazda"
};
van.milage = 123456;
console.log(van);
const nameAgeMap = {};
nameAgeMap.udara = 25;
nameAgeMap.nimal = 50;
nameAgeMap.ann = 30.5;
console.log(nameAgeMap);
//# sourceMappingURL=ObjectsTypeScript.js.map