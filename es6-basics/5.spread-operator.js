/*
    ? Spread Operator: unpacks elements from array  
    ? Rest Operator  : packas elements into an array
*/

// Spread operator consists of (...) dots

const odd = [1,3,5]
const combined=[2,4,6, ...odd]
console.log(combined)

// Rest Operator (...)

function display(a,b,c,d,e,f,...params){
    console.log(a,b,c,d, e, f)
    console.log(params)
}

display(1,2,3,4,5,6)

// Constrcuting Array Literal 

let intialChars =['A', 'B']
let chars = [...intialChars, 'C', 'D']
console.log(chars)

// Concatenating Arrays

let numbers =[1,2]
let mostNumbers =[3,4]
let allNumbers = [...numbers, ...mostNumbers]
console.log(allNumbers)

// Coying an array

let scores = [80,70,90]
let copiedScores = [...scores]
console.log(copiedScores)


// Spread operator and string 
/*
    * When we apply spread operator to the 'BC' string
    * it spreads out each individual character of the string
*/

let characters1 = ['A', ...'BC', 'D']
console.log(characters1) 

let characters2 = ['A', ...'80', 'D']
console.log(characters2) 