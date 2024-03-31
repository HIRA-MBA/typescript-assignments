"use strict";
//  18 array of cities in order
let cities = ["Islamabad", "Quetta", "Lahore", "Sialkot", "Multan"];
console.log("original cities : ", cities);
console.log("cities in alphabatic order without modifying : ", [...cities].sort());
console.log("original cities : ", cities);
console.log("cities in reverse alphabatic order without modifying : ", [...cities].sort().reverse());
console.log("original cities : ", cities);
// • Reverse the order of your list. Print the array to show that its order has changed.
cities.sort().reverse();
console.log("cities in reverse alphabatic order : ", cities);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
cities.reverse();
console.log("cities in reverse alphabatic order : ", cities);
// • Sort your array so it’s stored in alphabetical order.
//  Print the array to show that its order has been changed.
cities.sort();
console.log("cities in alphabatic order : ", cities);
// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
cities.reverse();
console.log("cities in reverse alphabatic order : ", cities);
