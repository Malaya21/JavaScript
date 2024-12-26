//map()
// The map() method creates a new array by calling a function for each element in the original array.
//map() method does not change the original array.
//The map() method calls the provided function once for each element in an array, in order.
//The map() method does not execute the function for array elements without values.

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((element)=>element+1)
console.log(newArr);
//WE can also use multiple map() method in a single line.
const newArr1 = arr.map((element)=>element+1).map((element)=>element*2)
console.log(newArr1);
//The map() method can also be used with strings.
const str = "hello world!"
const newStr = Array.from(str).map((char)=>char.toUpperCase()).join("")
console.log(newStr);
console.log(arr.join(" "));


//Map is a collection of key-value pairs.
//It similar to object but it cotaions unique keys.
//It is also iterable. But object is not iterable.


const map = new Map()
map.set("IND", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
console.log(map); //This prints like this Map(3) {"IND" => "India", "USA" => "United States of America", "UK" => "United Kingdom"}

for(const key of map){
    console.log(key);
}
// The for...of loop iterates over the map and prints each key-value pair to the console.
//It returns the key-value pair as an array. like ["IND", "India"]

//TO get the key and value separately we can use destructuring.
for(const [key, value] of map){
    console.log(key, value);
}
// The for...of loop iterates over the map and prints each key and value to the console. like IND India USA United States of America UK United Kingdom

