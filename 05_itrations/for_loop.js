//for Loops
// For loops are used to iterate over a sequence of elements.
// The for loop has the following syntax:
// for (initialization; condition; increment/decrement) {
//    // code to be executed
// }
// The initialization statement is executed only once.
// Then, the condition is evaluated. If the condition is true, the code block is executed.
// After the code block has been executed, the increment/decrement statement is executed.
// The condition is evaluated again, and the loop continues until the condition is false.
// The following example demonstrates the use of a for loop to iterate over an array of elements:
const numbers = [1, 2, 3, 4, 5];
for (let i = 0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// The for loop iterates over the array numbers and prints each element to the console.
//While Loops   