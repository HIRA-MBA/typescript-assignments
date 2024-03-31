// 43.	Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

var newMagicians:string[]=["james","xavior","michael"];


function make_great(newMagicians: string[]) {
    let greatMagicians: string[] = [];
    newMagicians.forEach((newMagician) => {
        greatMagicians.push(`${newMagician} the Great`);
    });
    return greatMagicians;
}

function show_magicians(newMagicians:string[]){
    console.log(newMagicians)
}
show_magicians(newMagicians)

let greatMagicians=make_great(newMagicians)
console.log("original array")
show_magicians(newMagicians)
console.log("modified array")
show_magicians(greatMagicians)




