"use strict";
// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure
//  that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has,
//  print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n \t questionno 32");
let current_users = ["eric", "peter", "robbert", "harry", "micale"];
let new_users = ["sara", "Maria", "Loren", "Harry", "Micale"];
new_users.forEach((new_user) => {
    if (current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} already exist ,please try another name`);
    }
    else {
        console.log(`${new_user} you can continue`);
    }
});
