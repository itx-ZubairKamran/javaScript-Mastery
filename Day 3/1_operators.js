// What are Operators?
// Operators are special symbols that perform operations on values and variables.
// They allow us to manipulate data and return results.
// Operators make logic happen.
// They help you make decisions, combine values, and create expressions

// 1=> Arithmetic Operators
// Used to perform basic mathematical operations.
let a = 10;
let b = 5;

console.log("Addition:", a + b);         // 15
console.log("Subtraction:", a - b);      // 5
console.log("Multiplication:", a * b);   // 50
console.log("Division:", a / b);         // 2
console.log("Modulus (Remainder):", a % b); // 0  it tells us  how much left behind
console.log("Exponentiation:", a ** 2);  // 100 this is power like you find the 2 power of 3 you directluy use 2**3 = 8
 

// 2=> Assignment Operator
// Used to assign values to variables.
// =    -> assigns value
// +=   -> a += b => a = a + b
// -=   -> a -= b
// *=, /=, %=

let scores = 5;
scores += 2; 
// try to use all these operators by youself to learn them and observe them  perfectely


// 3 => Comparison Operators
// Used to compare two values and return a boolean result (true/false) and use to check condtion
// ==    -> equal (loose)
// ===   -> equal (strict – value + type)
// !=    -> not equal (loose)
// !==   -> not equal (strict)
// >, <, >=, <=  

console.log(5 == "5")
console.log(5 === "5")
// practice all camparison operators to judge the result


// 4 => Logical Operators
// Used to combine multiple conditions.
// &&  AND – both must be true
// ||  OR – either one true
// !  NOT – negates truthiness
let age = 20;

console.log("AND (&&):", age > 18 && age < 30)
console.log("OR (||):", age > 25 || age < 30)
console.log("NOT (!):", !(age > 18))

// 5 => Ternary Operator
// A shortcut for if-else statements. or Shorthand for if...else
// condition ? valueIfTrue : valueIfFalse

let score = 67
let grade = score > 50 ? "Pass" : "Fail";
console.log(grade)


// 6 =>  Unary Operators
// Used on a single operand.
// +   -> tries to convert to number
// -   -> negates
// ++  -> increment
// --  -> decrement
// typeof ->  returns data type

// Increment and Decrement to practice the unary operators
let z = 12
let y =13
z++;
console.log("Increment:", z); 

y--;
console.log("Decrement:", y); 



// 7 => Type Operators
// Used to check types or convert them.
typeof 123 // "number"
typeof "hi" // "string"
typeof null // "object" (JS bug)
typeof [] // "object"
typeof {} // "object"
typeof function(){} // function


// All operators for quick revision:
// Arithmetic -> +, -, *, /, %, **, ++, --
// Assignment -> =, +=, -=, *=, /=, %=, **=
// Comparison -> ==, ===, !=, !==, >, <, >=, <=
// Logical   -> &&, ||, !
// Ternary  -> condition ? true : false
// unary ->  +,-,++,-- , typeof
// Type ->  typeof, instanceof, Array.isArray()
