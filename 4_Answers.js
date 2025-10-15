// Q1
function bmi(weight, height) {
  return weight / (height * height);
}

console.log(bmi(60, 1.7));

// Q2
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();
greet("Zubair");

//Q3
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(2, 4, 6, 8));

// Q4
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
// Q5
function sayHi() {
  return function () {
    console.log("Hi there!");
  };
}

const hi = sayHi();
hi();

// Q6
function logEvenNumbers(arr) {
  arr.forEach((num) => {
    if (num % 2 === 0) console.log(num);
  });
}
logEvenNumbers([1, 2, 3, 4, 5, 6]);

// Q7
function addTax(price, taxRate) {
  return price + price * taxRate;
}
console.log(addTax(100, 0.1))(
  // Q8
  function () {
    console.log("Welcome to my js journery");
  }
)();

// Q9
function discountCalculator(discountRate) {
  return function (price) {
    return price - price * discountRate;
  };
}

const tenPercentOff = discountCalculator(0.1);
console.log(tenPercentOff(200));

// Q10
// Higher-Order Function
function transformer(func, value) {
  return func(value);
}

// Function to convert string to uppercase
function toUpperCaseText(str) {
  return str.toUpperCase();
}

let result = transformer(toUpperCaseText, "zubair");
console.log(result);
