// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

let magicians : string[] = ["peter","parker","harry","potter"]
function show_magicians(magicians:string[]):void {
    magicians.forEach((magician) => {console.log(magician)
        
    });
    
}

console.log("\n \t question 41 \n")
show_magicians(magicians)

