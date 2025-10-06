// variables.js

// 👉 What are variables?
// Variables are containers that store data values in memory.

// 1. Declaring a variable using 'var' (old way) scoped to function not blocked
var oldWay = "Hello from var!";
console.log(oldWay);

// 2. Declaring a variable using 'let' (modern way) blocked scope
let name = "Zubair";
console.log("My name is:", name);

// 3. Declaring a variable using 'const' (constant, value cannot change) it is also blocked scope 
const pi = 3.14159;
console.log("Value of Pi:", pi);

// 🧠 Variable naming rules:
// - Must start with a letter, _ , or $
// - Cannot start with a number
// - Case sensitive (name != Name)

// Use const by default. Use let only when you plan to change the value.
// Avoid var — it belongs to the past.

// ✅ Practice Tasks:
// 1. Create a variable called 'city' and assign your city name.

let city = "fasialabad"
console.log(city)

// 2. Change the value of 'city' and print it.
city = "Islamabad"
console.log(city)

// 3. Try to reassign a 'const' and see what error you get.
const Babar = 56
// Babar= 67 when you tried to chnage the value it show error and u can not cahnge it 
console.log(Babar)


// var is old and risky 
// let and const are modern so use them
// during hoisting Var give undefined value but let  and const give reference error only it show "Cannot access 'variable name' before initialization"

// run this for understanding
// var give undefined but other gave referrance error
console.log(a)
var a = "zuabir"

console.log(b)
const b = " Kamran"

console.log(ali)
let ali = 23

