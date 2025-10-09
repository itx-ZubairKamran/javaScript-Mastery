//What is Control Flow?
// Control flow in JavaScript determines the order in which code statements are executed.
// Normally, code runs from top to bottom — but with control flow statements,
// we can make decisions (if), run code repeatedly (loops), or skip parts of code.
// Control flow decides which code runs, when it runs, and how many times it runs.
// It's like decision-making + direction in your JavaScript program.
// If operators are the verbs, control flow is the traffic sign


// 1=>  if Statement
// Runs a block of code only if a given condition is true.
let age = 18

if (age >= 18) {
  console.log("You are eligible to vote! but cast it only for khan");
}


// 2=> if...else Statement
// Runs one block if the condition is true, otherwise another.
// else never take any condition if condtion which is given in if(condition) is true it did not execute but if false then it run


let temperature = 10

if (temperature > 20) {
  console.log("It's a warm day")
} else {
  console.log("It's a cold day")
}
// run this code you observe that condition is wrong and it show it is cold day during runtime


// 3=> else if Ladder
// Used when you have multiple conditions to check.
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


// 4=> Nested if
// You can place an if inside another if.
// it has more than one condition and run only that condition which is true 
// it also include else at end if all condition are wrong then else run 
let Student = true;
let feesPaid = true;

if (Student) {
  if (feesPaid) {
    console.log("Access granted to the student portal.");
  } else {
    console.log("Please pay your fees to continue.");
  }
}

// 5=>  Switch Statement
// Used when you have many conditions based on a single value.
//Great for checking one variable against many values

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend!");
}

//Early Return Pattern
//Used in functions to exit early if some condition fails
function checkAge(age) {
 if (age < 18) return "Denied";
 return "Allowed";
}
//This avoids deep nesting and makes logic cleaner



// Summary 
// if -> runs when condition is true
// if...else -? chooses between two paths
// else if -> checks multiple conditions
// nested if -> used for more complex decisions
// switch -> better for many fixed values
// Early Return Function -> used in function to return a value or exit the condition as it fails


