// function greet(message){
//     return function wish(){ 
//         return function welcome(){
//             return 1
//         }
//     }
// }

// var wishFunc = greet('Hi')

// var welcomeFunc = wishFunc();

// var welcome = welcomeFunc()

// console.log(welcome)

// // var finalOutcome = greet('Hi')()()
// // console.log(finalOutcome)

function greet(message){
    return function(name){
        return message + ' ' + name
    }
}

var sayHello = greet('Hello')
console.log(sayHello)

var wish = sayHello('JohnGalt')
console.log(wish)