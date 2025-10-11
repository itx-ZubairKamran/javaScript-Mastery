let str = "zubair" // first string 
let reversed = "" // let assume a new empty string 
for (let i = str.length-1;i>=0;i--){ 
    reversed += str[i] // it add all index value to print new reversed array
}
console.log(reversed)

let q = "123456789"
let a = ""
for (let i = q.length-1; i>=0 ;i--){
    a += q[i]
}
console.log(a)

let arr = [ 1,2,3,4,5,6]
let arr2 = ''
for (let i = arr.length -1;i>=0;i--){
    arr2 += arr[i]
}
console.log(arr2)

for (let i = 1; i<=5; i++){
    let pattern=""
    for (let j=1 ; j<=i ; j++){
        pattern+= "*"
    }
    console.log(pattern)
}

// practice the reversed & pattern print 