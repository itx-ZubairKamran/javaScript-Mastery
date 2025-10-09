// Q1

let marks = 73

if (marks >= 90) {
  console.log("Grade: A")
} else if (marks >= 80) {
  console.log("Grade: B")
} else if (marks >= 70) {
  console.log("Grade: C")
} else if (marks >= 60) {
  console.log("Grade: D")
} else {
  console.log("Grade: F")
}

// Q2

let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
  console.log("It's a draw!");
} 
else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper")
) {
  console.log("Player 1 wins!");
} 
else {
  console.log("Player 2 wins!");
}

//Q3 
// Day 4 - Control Flow
// Q3. Show different messages based on combination using these variables

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin! You have full access.");
} 
else if (isLoggedIn && !isAdmin) {
  console.log("Welcome User! You have limited access.");
} 
else {
  console.log("Please log in to continue.");
}

//Q4
// Day 4 - Control Flow
// Q4. Use switch-case to print what to wear

let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("It's sunny! Wear sunglasses and light clothes.");
    break;

  case "rainy":
    console.log("It's rainy! Take an umbrella and wear a raincoat.");
    break;

  case "cold":
    console.log("It's cold! Wear a jacket and stay warm.");
    break;

  case "windy":
    console.log("It's windy! Hold onto your hat!");
    break;

  default:
    console.log("Weather unknown. Dress comfortably!");
}
// always use break after the every case so it stop when case is true otherwise it run and do not give any value 

//Q5
// Day 4 - Control Flow
// Q5. Return "Kid", "Teen", "Adult", or "Senior" based on age

let age = 25;
let category;

if (age < 13) {
  category = "Kid";
} else if (age >= 13 && age < 20) {
  category = "Teen";
} else if (age >= 20 && age < 60) {
  category = "Adult";
} else {
  category = "Senior";
}

console.log("You are an:", category);
