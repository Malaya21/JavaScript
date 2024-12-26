//for of loop 
// The for...of loop is used to iterate over the elements of an iterable object.
// The for...of loop has the following syntax:
// for (variable of iterable) {
//    // code to be executed
// }

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    console.log(element);
}
// The for...of loop iterates over the array arr and prints each element to the console.
// The for...of loop can be used with arrays, strings, maps, sets, and other iterable objects.
// The for...of loop does not work with objects because objects are not iterable.
// for (const element of 'hello') {
//     console.log(element);
// }
// The for...of loop iterates over the string 'hello' and prints each character to the console.
// The for...of loop can also be used with maps and sets.

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