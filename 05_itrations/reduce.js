//Array.reduce() method is used to reduce the array to a single value. It executes the provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.
//The reduce() method takes two parameters: a callback function and an initial value.

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator,currentvalue)=> accumulator + currentvalue, 1)
console.log(sum); //16
//we can also use it with in array 
const courses = [
    {name: 'JavaScript', price: 999},
    {name: 'React', price: 799},
    {name: 'Node', price: 299},
    {name: 'Python', price: 199}
];

const gst = 199;
const totalPrice = courses.reduce((acc,item)=>acc+item.price,gst)
console.log("Total price of the cource is : "+totalPrice);
//Output: Total price of the cource is : 2296   
//In the above example, we have an array of objects representing courses. We want to calculate the total price of all the courses. We can use the reduce() method to calculate the total price.
//We have an initial value of 199 which is the GST. The reduce() method will iterate over each course object and add the price to the accumulator. Finally, it will return the total price of all the courses.
//The reduce() method is a powerful tool for working with arrays in JavaScript. It allows you to perform complex operations on arrays and reduce them to a single value. You can use it to calculate totals, averages, and other aggregate values from an array of values.
//
