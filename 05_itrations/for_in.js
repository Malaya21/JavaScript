//for in method is used to iterate over the properties of an object.
//The for...in loop iterates over the object obj and prints each key and value to the console.
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for(key in obj){
    console.log(key ,':- ',obj[key]);
    }

//It returns the key and value separately. like name John age 30 city New York
//The for...in loop can be used with objects, arrays, and other iterable objects.
//With arrays, the for...in loop iterates over the array indexes, not the array elements.
const myArray = [10,20 ,30, 40, 50];
for(index in myArray){
    console.log(index, myArray[index]);
}
