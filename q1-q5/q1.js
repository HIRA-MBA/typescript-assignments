"use strict";
//  assignment 1 :installations
// assignment 2:2.	Personal Message: Store a person’s name in a variable, and print a message to that person. 
let person_name = "Eric";
console.log("\n\t Assignment no 2 \n");
console.log(person_name, " Would youn like to learn Python today");
// assignment no 3:3.	Name Cases:  person’s name in lowercase, uppercase, and titlecase.
let person = "Eric Robert";
console.log("\n \t Assignment # 3 \n");
console.log(" \n lowercase : ", person.toLowerCase());
console.log("\n Uppercase : ", person.toUpperCase());
// for titlecase
function titlecase(personName) {
    let person1 = personName.toLowerCase().split(" ");
    for (let i = 0; i < person1.length; ++i) {
        person1[i] = person1[i].charAt(0).toUpperCase() + person1[i].slice(1);
    }
    return person1.join(" ");
}
console.log("\n Titlecase : ", titlecase("syed shaukat raza"));
// Assignment no 4:4.	Famous Quote: Find a quote from a famous person you admire. 
console.log("\n \t Assignment 4 ");
console.log('Quaid e Azam once said :"There are two powers in the world; one is the\
 sword and the other is the pen".');
// assignment no 5:	Famous Quote 2: Repeat Exercise 4, but this time store the famous
//  person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message
let famousPerson = "Quaid e Azam";
let message = "There are two powers in the world; one is the sword and the other is the pen";
console.log("\n \t assignment 5");
console.log(famousPerson, "once said :", message);
