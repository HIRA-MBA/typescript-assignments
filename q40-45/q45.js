"use strict";
// 45Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or 
//  an optional feature. Print the Object that’s returned to
//  make sure all the information was stored correctly.
function car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(car("Honda", "city", ['color', 'white'], ['year', 2005]));
function make_bike(make, model, ...options) {
    let bike = { make, model };
    options.forEach(([key, value]) => bike[key] = value);
    return bike;
}
console.log(make_bike("honda", "cd125", ['color', 'black'], ['year', 2024]));
console.log("suzuki", "gr175", ['color', 'red']);
