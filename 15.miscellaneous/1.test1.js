// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z;
//         }
//     }
// }

// var output = multiply(2)(3)(4)
// console.log(output)

// var a = 10;
// var b = a; 
//  a = 20;
//  console.log(a)
//  console.log(b)

//  var a =[1,2]
//  var b = a;
//  a.push(3)
//  console.log(a)
//  console.log(b)

//  var x =[1,2,3]
//  var y =x;
//  x =[1,2,3,4]

//  console.log(x)
//  console.log(y)

var name = "uma" + 1
console.log(name, typeof name)

var output = 1+2 + "Uma"
console.log(output)

var output = 1+2+"Uma"+4+5
console.log(output)

var output = 2+'2'+2
console.log(output, typeof output)

var output1 = (function(x){
    delete x;
    return x
})(0)

console.log(output1)

var x=1;
var output1 = (function(x){
    delete x;
    return x
})()

console.log(output1)

//var x=1;
var output1 = (function(){
    delete x;
    return x
})()

console.log(output1)

var output1 = (function(val){
    delete val.x;
    return val
})({x:0})

console.log(output1)

var output1 = (function(val){
    delete val.m;
    m =2
    return m
})({m:0})

console.log(output1)


console.table(
    [
        {name:"Uma", age: 39},
        {name:"Scott", age: 45},
        {name:"Adam", age: 43},
        {name:"Tuan", age: 41},
        {city:'Bengaluru'}
    ]
)

console.error('This is error')
console.warn('this is small warning')
console.info('this is for your information')
console.log('Hello')
console.log("Hello %s your Id is %i ", "Uma", 1234)
console.log('Hey %o', {name:'uma'})


console.log(evenOrOdd(3))
console.log(evenOrOdd(6))
console.log(evenOrOdd(7))

function evenOrOdd(val){
    // if(val%2==0){
    //     return true
    // } else {
    //     return false
    // }

    //return val%2==0?true:false;

    return val%2==0
}


