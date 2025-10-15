// advanced_functions

// ==> Default Parameters
// Default parameters allow a function to have default values
// if no arguments are passed.

function greet(name = "Guest") {
  console.log("Hello,", name);
}
greet("Zubair"); // Hello, Zubair
greet(); // Hello, Guest

function good(a = 8, b = 2) {
  return a * b;
}
console.log(good());

// ==> Rest Parameters (...)
// It allows a function to accept any number of arguments as an array.

function sum(...numbers) {
  // (...numbers this is rest here)
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(2, 4, 6, 8)); // Sum: 20

// lets undersatnd it by using a simple example
function zubair(...kamran) {
  console.log(kamran);
}
zubair("From Faisalabad ", 203, "4th semester"); // means now you  call function and everthing you gave to this function is now show as a array data

// ==> Spread Operator (...)   it is used when you want to copy a array into another array
// if you use the simple way like arr1=arr2 it copy reference only not values
// and change in arr2 also effect on arr1 so we used spread operator in function
// to copy actual values (not reference), use the spread operator:
// It spreads (expands) array or object elements into individual values.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // merge arrays
console.log("Combined:", combined); // now it show the result in which both arr1 and arr2 include

let obj1 = { name: "Zubair" };
let obj2 = { age: 20 };
let merged = { ...obj1, ...obj2 }; // merge objects
console.log("Merged Object:", merged);

let array1 = [0, 9, 8, 7];
// let array2
let array2 = array1; // it copy refernce only not values
// let array2=[...array1]
console.log(array2);
console.log(array1);
array2.push(100);
console.log(array2);
console.log(array1); // now checked it also update the value in array1
// so if we used spread it update value in array2 and if we push anything in array2 it only update in array2 not in 1
// to understand it please do it by yourself

//  Higher-Order Functions (HOF)
// A function that takes another function as an argument OR returns a function.

// Higher-order function
function greetUser(greetFunction) {
  console.log("Preparing to greet...");
  greetFunction(); // calling another function inside
}
// Function as argument
function sayHello() {
  console.log("Hello, Zubair!");
}
// Call
greetUser(sayHello);

function add(a, b) {
  // add is one function
  return a + b;
}
function cal(add) {
  // call is second function which take add as an parameter
  let result = add(5, 4);
  console.log(result);
}
cal(add); // now you call function cal and add as an argument

// Another example: using map (which is a built-in HOF)
let numbers = [1, 2, 3, 4];
let squares = numbers.map((num) => num * num);
console.log("Squares:", squares);

// ==>  Closures & Lexical Scope
// Closure = Function that remembers its outer scope even after the outer function has finished executing.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

let counter = outer(); // outer() returns inner function
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Lexical Scope = Inner function can access variables of outer function, but not vice versa.
//Lexical Scope = Access from outer → inner.
// Closure = Inner function remembers outer variables even after outer function ends.

// ==> IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after it is defined.
//Used to create private scope instantly

(function () {
  console.log("This runs immediately!");
  b;
})();

// or with arrow function
(() => console.log("Arrow IIFE executed!"))(); // it is not used mostly

// Hoisting: Declarations vs Expressions
// Function Declarations are hoisted completely
// Function Expressions are NOT hoisted (ReferenceError if accessed before declaration)

hoisted(); // Works fine

function hoisted() {
  console.log("I am hoisted!");
}

// ❌ Not hoisted
try {
  notHoisted();
} catch (err) {
  console.log("Error:", err.message);
}

const notHoisted = function () {
  console.log("I am not hoisted!");
};

//  Summary:
//  Default: gives default values to parameters
//  Rest: packs multiple args into an array
//  Spread: unpacks array/object elements
//  HOF: function that takes/returns another function
//  Closure: inner function remembers outer scope
//  Lexical Scope: inner can access outer variables
//  IIFE: runs instantly after definition
//  Hoisting: declarations hoisted, expressions not
