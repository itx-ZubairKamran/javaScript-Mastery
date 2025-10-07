// Q1
const Name = 'Zubair Kamran'
const city = "Faislabad"
let age = 21
console.table({Name,city,age}) //this is another way to access all variable in single way

// Q2 is observing question so only you run it an dobserve the result
// Q3 is also for guessing and it give undefined as var hoisting gave undefined value and let and const give Cannot access 'variable name' before initialization

// Q4
const obj={
    zubair: "name"
}
obj.zubair = "Web developer"
console.log(obj)

// Q5
// console.log(a)
// let a = "Zubair Kamran"
// it give reference error  call hoisting concept

// Q6
const arr= [1,2,3,4,5,6,7]
arr= [7,6,5,4,3,2,1]
console.log(arr)