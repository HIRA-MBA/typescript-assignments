// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//  If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.
 var alien_color :string = "green";
 console.log("\n\t question 26 \n")
 if (alien_color === "green"){
    console.log("you have earned 5 points")
 }

//  for printing block statement
console.log("\n\t to print block statement")
var alien_color2 :string = "red";
if (alien_color2 === "green"){
    console.log("you have earned 5 points \n");
 } else {console.log("you have earned 10 points")}