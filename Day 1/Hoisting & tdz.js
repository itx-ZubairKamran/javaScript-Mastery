// Hoisting is JavaScript's behavior of moving variable and function declarations 
// to the top of their scope before code execution.

// ---------------------------------------
// 1. Hoisting with 'var' (old way)
// 'var' variables are hoisted and initialized as undefined
console.log(a); // undefined
var a = 10;

// ---------------------------------------
// 2. Hoisting with 'let' and 'const' (modern way)
// These variables are hoisted but NOT initialized
// They are in Temporal Dead Zone (TDZ) until the declaration line executes

try {
  console.log(b); // ❌ ReferenceError
} catch (err) {
  console.log("TDZ Error for 'b':", err.message);
}
let b = 20;

console.log(zubair)
let zuabir= "this repo created by zubair"

try {
  console.log(c); // ❌ ReferenceError
} catch (err) {
  console.log("TDZ Error for 'c':", err.message);
}
const c = 30;

// 🧠 Explanation of TDZ:
// TDZ = Temporal Dead Zone
// - The period between the start of the scope and the actual variable declaration
// - You cannot access 'let' or 'const' variables in TDZ
// - Accessing them gives ReferenceError

// ---------------------------------------
// 3. Function Hoisting
// Function declarations are fully hoisted, so you can call them before definition
greet(); // Works fine

function greet() {
  console.log("Hello from hoisted function!");
}

// ---------------------------------------
// ✅ Key Takeaways:
// - var → hoisted and initialized as undefined
// - let/const → hoisted but in TDZ until declaration line executes
// - Functions → hoisted with body, callable before definition

// ---------------------------------------
// 🧪 Practice Tasks:
// 1. Try accessing a var, let, and const variable before declaration and observe outputs
// 2. Create a function and call it before and after definition
// 3. Explain TDZ in your own words
