"use strict";
// // condtions true and one False result for each of the following:
// • Tests for equality and inequality with strings
let myCar = "honda";
console.log(" \n \t question 24 a \n ");
console.log(myCar === "honda"); // true
console.log(myCar != "honda"); // false
console.log(myCar != "Honda"); // true
// • Tests using the lower case function
console.log(" \n \t question 24 b \n ");
console.log("Apple".toLowerCase() === "apple"); //true
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
let result = 75;
console.log(" \n \t question 24 c \n ");
console.log("result ===100", result === 100); //false
console.log("result !=100", result != 100); //true
console.log("result > 100", result > 100); // false
console.log("result >= 100 ", result >= 100); //false
console.log("result < 100", result < 100); //true
console.log("result <= 100", result <= 100); //true
// • Tests using "and" and "or" operators
let mynumber = 10;
console.log(" \n \t question 24 d \n ");
console.log(" mynumber > 2 && mynumber <20 ", mynumber > 2 && mynumber < 20); // true
console.log(" mynumber > 15 && mynumber <20 ", mynumber > 15 && mynumber < 20); // false
console.log(" mynumber > 2 || mynumber <20 ", mynumber > 2 || mynumber < 20); // true
console.log(" mynumber > 11 || mynumber <20 ", mynumber > 2 || mynumber < 20); // true
// • Test whether an item is in an array
let pets = ["parrot", "cat", "duck"];
console.log(" \n \t question 24 e \n ");
console.log(pets.includes("cat"));
// • Test whether an item is not in an array
console.log(" \n \t question 24 f \n ");
console.log(!pets.includes("dog"));
