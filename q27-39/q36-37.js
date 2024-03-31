"use strict";
// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a
//  message that should be printed on the shirt. The function should print a sentence summarizing the size
//  of the shirt and the message printed on it. Call the function
function make_shirt(size, message) {
    console.log(`this ia function that that shows shirt size ${size} printed ${message} on it`);
}
console.log("\n\t question 36 \n");
make_shirt("large", "i love Typescript");
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt
//  with the default message, and a shirt of any size with a different message.
function make_shirts(size = "large", message = "i love Typescript") {
    console.log(`this ia function that that shows shirt size ${size} printed ${message} on it`);
}
console.log("\n\t question 37 \n");
console.log("default function : ");
make_shirts();
console.log("\n medium size shirt with default message :");
make_shirts("medium");
console.log("\n shirt of size and message: ");
make_shirts("small", "I love Pakistan");
