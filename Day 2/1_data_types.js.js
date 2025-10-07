//  What are Data Types?
// Data types define the kind of value a variable can hold. 
// JavaScript is dynamically typed, meaning you don't have to declare the type — it’s decided at runtime.

// ✅ JavaScript has 2 main types: Primitive and Non-Primitive


//  1. Primitive Data Types (7 total)
// These hold single values and are immutable

//  String - text enclosed in quotes
let name = "Zubair";
console.log("String:", name);

//  Number - integer or floating point
let age = 21;
let pi = 3.14;
console.log("Number:", age, pi);

//  Boolean - true or false
let isStudent = true;
console.log("Boolean:", isStudent);

//  Undefined - variable declared but not assigned
let city;
console.log("Undefined:", city);

//  Null - intentional empty value
let car = null;
console.log("Null:", car);

//  Symbol - unique and immutable value (used in advanced JS)
let id = Symbol("id");
console.log("Symbol:", id);

//  BigInt - large integers beyond Number limit
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);


// 2. Non-Primitive (Reference) Data Types
// These store collections or complex data and are mutable

// Object - key-value pairs
let person = {
  name: "Zubair",
  age: 21,
};
console.log("Object:", person);

//  Array - ordered list of values
let colors = ["red", "green", "blue"];
console.log("Array:", colors);

//  Function - block of reusable code
function greet() {
  console.log("Hello, welcome!");
}
greet();



//  typeof operator - Used to check the data type of a value
typeof "Zubair" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"   it is array data type
typeof {} // "object"    it is object data type
typeof function(){} // "function"  it is function
typeof NaN  //number Even though it means “Not a Number”, NaN is actually of type number .

//typeof null === "object" is a bug, but has existed since the early days of JS 
// you can say ,it is the biggest blunder in js 


