// Q1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q2
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q3
let str = "Zubair";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Reversed String:", reversed);

// Q4 
let nums = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("Sum =", sum);

// Q5
let name = "Zubair";
for (let ch of name) {
  console.log(ch);
}

// Q6
let person = { name: "Zubair", age: 21, city: "Sargodha" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Q7
  for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip 5
  }
  console.log(i)
}



// // Q8
// let correct = 7;
// let guess;
// while (guess !== correct) {
//   guess = parseInt(prompt("Guess a number between 1 and 10:"));
// }
// console.log("🎉 Correct! The number was", correct);
// run in chrome because it want a user input and here is not possible 
// so every question in which a user input is coming it only run in chrome 


// Q9
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Q10
let numbers = [2, 5, 8, 11, 14];
let evenSum = 0;
numbers.forEach(num => {
  if (num % 2 === 0) {
    evenSum += num;
  }
});
console.log("Sum of even numbers =", evenSum);
