"use strict";
// 11.	Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
let Names = ["mary", "james", "peter"];
console.log("\n \t Assignment 11 \n");
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
// The text of each message should be the same, but each message should be 
// personalized with the person’s name.
console.log("\n \t Assignment 12 \n");
console.log("Hello ", Names[0]);
console.log("hello", Names[1]);
console.log("hello ", Names[2]);
// 13.	Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items
let cars = ["honda", "suzuli", "toyota"];
console.log("\n \t Assignment 13 \n");
console.log(`I like m ${cars[0]} very much.Beacuse it is high quality, low price \
and availabilty of parts.\n its maintenance cost is low and resale value is high.`);
console.log(`I like m ${cars[1]} very much.Beacuse it is high quality, low price \
and availabilty of parts.\n its maintenance cost is low and resale value is high.`);
console.log(`I like m ${cars[2]} very much.Beacuse it is high quality, low price \
and availabilty of parts.\n its maintenance cost is low and resale value is high.`);
// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
let guests = ["sara", "fara", "maria"];
console.log("\n \t Assignment 14 \n");
console.log(`${guests[0]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests[1]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests[2]} : i am glad to invite you on dinner this Sunday.`);
// 15• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
//  name of the guest who can’t make it.
let guests_new = ["sara", "fara", "maria"];
console.log("\n \t Assignment 15 \n");
console.log(`${guests_new[0]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests_new[1]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests_new[2]} : i am glad to invite you on dinner this Sunday.`);
let guest_remove = guests_new.pop();
console.log(guests_new);
console.log(`${guest_remove} is not coming on dinner so we are inviting new frind Marry`);
guests_new.push("marry");
console.log(guests_new);
console.log(`${guests_new[0]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests_new[1]} : i am glad to invite you on dinner this Sunday.`);
console.log(`${guests_new[2]} : i am glad to invite you on dinner this Sunday.`);
// # 16:add three more guest 
console.log("\n \t Assignment 16 \n");
guests_new.unshift("perker");
guests_new.splice(0, 0, "peter");
guests_new.splice(3, 0, "Robert");
guests_new.push("Eric");
console.log(guests_new);
for (let g = 0; g < guests_new.length; ++g) {
    console.log(`${guests_new[g]} you are invited on dinner this Sunday`);
}
// #17:shrinking guest list until 2 left
console.log("\n \t Assignment 17 \n");
let guest_remove1 = guests_new.pop();
console.log(`${guest_remove1}, sorry we can invite only two people for dinner so we are not inviting you`);
let guest_remove2 = guests_new.pop();
console.log(`${guest_remove2},sorry we can invite only two people for dinner so we are not inviting you `);
let guest_remove3 = guests_new.pop();
console.log(`${guest_remove3}, sorry we can invite only two people for dinner so we are not inviting you`);
let guest_remove4 = guests_new.pop();
console.log(`${guest_remove4}, sorry we can invite only two people for dinner so we are not inviting you`);
let guest_remove5 = guests_new.pop();
console.log(`${guest_remove5}, sorry we can invite only two people for dinner so we are not inviting you`);
console.log(guests_new);
console.log(`${guests_new[0]} you are still invited`);
console.log(`${guests_new[1]} you are still invited`);
guests_new.splice(0, guests_new.length);
console.log(guests_new);
//  second approch for assignment 17
let new_guests = ["peter", "perker", "robbert", "sara", "Mary", "fara"];
console.log(" \n\t second approach for assignment 17 \n");
while (new_guests.length > 2) {
    let removed_guest1 = new_guests.pop();
    console.log(`${removed_guest1},i can't you on dinner`);
}
console.log(new_guests);
new_guests.forEach(guest => {
    console.log(`${guest}, we are  inviting you`);
});
new_guests.splice(0, new_guests.length);
console.log(new_guests);
