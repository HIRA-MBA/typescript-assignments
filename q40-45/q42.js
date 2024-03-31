"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
// make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
// name. Call show_magicians() to see that the list has actually been modified.
let new_magicians = ["peter", "parker", "harry", "potter"];
function show_magicians1(new_magicians) {
    new_magicians.forEach((new_magician) => {
        console.log(new_magician);
    });
}
console.log("\n \t question 42 \n");
function make_great(new_magicians) {
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = new_magicians[i] + "The Great ";
    }
}
make_great(new_magicians);
show_magicians1(new_magicians);
