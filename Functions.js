"use strict";
//You can specify return type
function multiply(no1, no2) {
    return no1 * no2;
}
console.log(multiply(10, 20));
function add(no1, no2) {
    return no1 + no2;
}
console.log(add(10, 20));
function sub(no1, no2) {
    console.log(no1 - no2);
}
sub(30, 10);
//If you want you can assign a value or not you can assign a default value
function optional(no1, no2, no3) {
    return (no1 + no2 + (no3 || 5));
}
console.log("optional(10, 20) => " + optional(10, 20));
console.log("optional(10, 20, 30) => " + optional(10, 20, 30));
//function named parameters
function devide({ divident, devisor }) {
    return divident / devisor;
}
console.log("Named Parameters => " + devide({ divident: 10, devisor: 3 }));
//Rest Parameters
function restFn(no1, no2, ...rest) {
    return (no1 + no2 + rest.reduce((p, c) => p * c, 3));
}
console.log("restFn => " + restFn(10, 20, 5, 5, 5, 5));
const negativeFn = (value) => value * (-1);
console.log("negativeFn(30) => " + negativeFn(30));
//Arrow function
const getValue = () => console.log("Hi");
getValue();
//Arrow function with parameters
const addNumbers = (no1, no2) => (no1 + no2);
console.log("addNumbers(10, 20) => " + addNumbers(10, 20));
//# sourceMappingURL=Functions.js.map