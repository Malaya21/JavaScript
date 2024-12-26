let x = 1;
if (x == true) { //The == operator compares the value of the variable x to the boolean value true. Since the value of x is 1, which is a truthy value, the condition is true.
    console.log('True');
}
else {
    console.log('False');
}
//Output: True

if (x === true) {
    console.log('True');
}
else {
    console.log('False');
}
//Output: False
let y = "1";
if (y == true) {
    console.log('True');
}