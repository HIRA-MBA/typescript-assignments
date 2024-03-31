// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
// for the country a default value. Call your function for three different cities,
//  at least one of which is not in the default country.

function describe_city(city:string , country:string ="Pakistan"):void{
    console.log(` ${city} is the provincial capital of ${country}`)
}
console.log("\n \t question 38 \n")
describe_city("karachi");
describe_city("Quetta");
describe_city("lahore");
describe_city("Dhaka","Bangladesh")

// 39.	City Names: Write a function called city_country() that takes in the name of a city and its 
// country. The function should return a string formatted like this:"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string , country : string)
{return `${city}:${country}`}
console.log("\n\t questio 39 \n")

console.log(city_country("karachi","Pakistan"))

console.log(city_country("Lahore","Pakistan"))

console.log(city_country("quetta","Pakistan"))

console.log(city_country("Ankara","Turkey"))
