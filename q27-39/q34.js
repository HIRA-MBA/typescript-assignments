"use strict";
// 34.	Pizzas: Think of at least three kinds of your favorite pizza.
//  Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing 
// just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like 
// I like pepperoni pizza.
let pizzas = ["bar b q", "peproni", "mushroom", "fatita"];
pizzas.forEach((pizza) => { console.log(pizza); });
// modification
pizzas.forEach((pizza) => { console.log(` i like ${pizza} pizza`); });
console.log("pizza is one of my favourite snack, usually when I dine out with friends\
we go into pizza restaurents.\n I really like pizza very much");
