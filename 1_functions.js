//  What are Functions?
// A function is a reusable block of code designed to perform a specific task.
// It helps organize code and avoid repetition

// come on understand it by using a real world example
// Think of a function like a vending machine:
// Input: you give money + item code
// Output: it gives you the item
// Logic: hidden inside

// 1=> Function Declaration (Regular Function)

function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet(); // calling function is so neccessary otherwise it does not work means function show nothing

// 2=> Function with Parameters

function add(a, b) {
  console.log("Sum:", a + b);
}
add(5, 10);

// 3=> Function with Return Value

function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 3); //when you used a retrun function you always declare  a varible for calling that function
console.log("Result:", result);

// 4=> Function Expression (Store function in a variable)

const sayBye = function () {
  console.log("Goodbye!");
};
sayBye();

// 5=> Arrow Function (Modern way, shorter syntax)
// modern way , clear syntax ,

const square = (n) =>{ 
  n * n;}
console.log("Square:", square(5));

// 6=> Default Parameters

function greetUser(name = "Guest") {
  console.log("Welcome,", name);
}
greetUser("Zubair");
greetUser(); // uses default value

//   Key Points:
//   Function Declaration → defined with `function` keyword
//   Function Expression → stored in variable
//   Arrow Function → compact and used often in modern JS and has clear syntax
//   Parameters → input values for function
//   Return → sends output back to where function was called
