
//On object we can not use for of loop. But we can use for in loop.
//for in loop is used to iterate over the properties of an object.
//The for...in loop has the following syntax:
//for (variable in object) {
//    // code to be executed
//}

// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// for(const key in obj){
//     console.log(key, obj[key]);
// }
// The for...in loop iterates over the object obj and prints each key and value to the console.
//It returns the key and value separately. like name John age 30 city New York  
//The for...in loop can be used with objects, arrays, and other iterable objects.
//With arrays, the for...in loop iterates over the array indexes, not the array elements.
//With objects, the for...in loop iterates over the object properties, not the object values.
//The for...in loop does not work with strings, maps, and sets.
// const myArray = [10,20 ,30, 40, 50];
// for(const index in myArray){
//     console.log(index, myArray[index]);
// }


// for each loop 
// The forEach() method is used to execute a function on each element in an array.

// myArray.forEach((element)=>{
//     console.log(element);
    
// })
// The forEach() method iterates over the array myArray and prints each element to the console.


// const ArrayObject =[{name: "John", age: 30}, {name: "Smith", age: 25}, {name: "Jane", age: 22}];
// ArrayObject.forEach((item)=>{
//     console.log(item);
    
// })
// console.log({name:"Malaya",age:20}.age);//This is also a way to access the object property.

// ArrayObject.forEach((item)=>{
//     console.log(item.name, item.age);//This will print the name and age of each object in the array.
// })
//forEach() method does not return anything. It simply iterates over the array and executes the function on each element.

//so to get return value and also apply some logic we use filter, map, reduce, find, some, every, etc.

//filter() method is used to create a new array with all the elements that pass the test implemented by the provided function.
// const num = [29,39,49,59,69,79,89,99];
// const result = num.filter((item)=> item>50);
// console.log(result);
//The filter() method creates a new array with all the elements that pass the test implemented by the provided function.
//Note that arrow function is directly return value when it is single line. If it is multiple line then we need to use return keyword.
//The filter() method does not change the original array. It returns a new array.


//Real time example of filter method
const Books = [
    {name: "Book one",genre: "Fiction",rating: 4.5,prise: 200},
    {name: "Book two",genre: "Non-Fiction",rating: 4.0,prise: 250},
    {name: "Book three",genre: "History",rating: 4.8,prise: 300},
    {name: "Book four",genre: "Science",rating: 4.2,prise: 150},
    {name: "Book five",genre: "Fiction",rating: 4.9,prise: 400},
];

//Create a new array that returns all the books having genre as Fiction.

const FictionBook = Books.filter((item)=>item.genre == "Fiction")
console.log(FictionBook); //This will print the array of objects having genre as Fiction.


//Create a new array that returns all the books having rating greater than 4.5.

const popularBooks = Books.filter((element)=>element.rating > 4.5)
console.log(popularBooks);

//Create a new array that returns all the books having prise less than or equal to 250.
const highPrise = Books.filter((item)=>item.prise <= 250)
console.log(highPrise)

const Arr2 = [20,40,60,80,100]; 
const result2 =Arr2.filter((item)=>item+10);//This will return the array of elements which are not undefined. filter() is only use to filter the elements based on some condition.
console.log(result2);



//map() method
//map() method is used to create a new array with the results of calling a provided function on every element in the calling array.



