
// The while loop executes a block of code as long as the specified condition is true.
// The while loop has the following syntax:
// while (condition) {
//    // code to be executed
// }
// The condition is evaluated before the execution of the code block.
// If the condition is true, the code block is executed.
// After the code block has been executed, the condition is evaluated again.
// The loop continues until the condition is false.
// let i = 0;
// while (i<10) {
//     console.log(i);
//     i++;
    
// }
// i = 0;
//Here also do while loop is there but it is not used much in the code.
//do while loop
// The do...while loop is similar to the while loop, but the condition is evaluated after the execution of the code block.
// do {
//     console.log(i);
//     i++;
// } while (i<10);

//Here is also we can use break and continue statements in the loops.
//The break statement is used to exit a loop.
//The continue statement is used to skip the current iteration of a loop.


for (let j = 0; j < 10; j++) {
    if (j === 5) {
        break;
    }
    console.log(j);
}

//continue statement
for(let k = 0; k < 10; k++) {
    if (k === 5) {
        continue;
    }
    console.log(k);
}
//In the above example, the loop will skip the iteration when the value of k is 5.
//The output will be: 0, 1, 2, 3, 4, 6, 7, 8, 9. Here, the value 5 is skipped.







