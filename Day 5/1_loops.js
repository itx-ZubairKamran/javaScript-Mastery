//What are Loops?
// Loops are used to repeat a block of code multiple times until a condition is false.
// They help avoid writing repetitive code.
// If a task needs to be done multiple times (for example=> printing 1–10, going through an array, or
// checking each character in a string), loops are the backbone

// 1=> for loop
// Runs a block of code for a fixed number of times

for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:")
}

// 2=> while loop
// Runs as long as the condition is true
// conditon is checked before the running of code

let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count)
  count++
}
// In a while loop, you have to manually write i++ (or some kind of increment/decrement),
// otherwise it becomes an infinite loop

// 3=> do while loop
// Executes the block at least once before checking the condition
// Runs at least once, even if condition is false

let num = 1;
do {
  console.log("Do-While Loop Count:", num);
  num++;
} while (num <= 3);
// In a while loop, you have to manually write i++ (or some kind of increment/decrement),
// otherwise it becomes an infinite loop


// 4=> for...of loop (for arrays or strings)
// Used to iterate directly over iterable items

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
// it is work on anything which is iteratable like array and string

// 5=> for...in loop (for objects)
// Used to iterate over keys of an object

let student = { name: "Ali", age: 20, grade: "A" };
for (let key in student) {
  console.log(`${key}: ${student[key]}`) //` ` this is backtrack also used to write something which do not run during code like " " ' '
}
// it is only used for object




// 🧠 Notes:
// - `for` → best for counting or known iterations
// - `while` → runs while condition is true (good for unknown end conditions)
// - `do...while` → runs at least once
// - `for...of` → iterate over arrays or strings
// - `for...in` → iterate over object properties

