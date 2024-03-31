//31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users_new : string[] = ["Eric","Marry","admin","Taha","Sara"];
console.log("\n \t question 31 \n")
users_new.splice(0,users_new.length)
console.log(users_new)
if (users_new.length == 0){
    console.log(" we need to find users")
}
 