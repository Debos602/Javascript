// javascript is single threaded
// javascript is synchronous
// javascript is dynamic
// javascript is weakly typed
// javascript
// It is known as  call stack, Execution contact stack, Program Stack, Control stack, Execution stack, Run-time stack, Machine stack
// It is a data structure which record the function call
// It is a stack data structure
// It is a LIFO data structure
// It is a stack of frames
// It is a stack of function call
// It is a stack of execution context
// It is a stack of execution context object
// It is a stack of lexical environment
// var n = 2;
// function squere(ab) {
//     var ans = ab * ab;
//     return ans;
// }
// console.log(squere(2));
// console.log(squere(3));
// console.log(squere(5));

//Hoisting is a variable or function's default behavior before declaring in the code. example
getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}
