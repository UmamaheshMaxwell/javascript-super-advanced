// var add = function(x, y){
//     return x+y
// }

// var add = (x,y) => {
//     return x+y
// }

// console.log(add(10,20))

// var add = (x,y) => { return x+y }
// console.log(add(10,20))

// var add = (x,y) => x+y
// console.log(add(10,20))

let names =["john","scott", "Adam"]

let lengths = names.map(name => name.length)

console.log(lengths)

let sayHello = () => "Say Hello"

console.log(sayHello())

// // Line Breaks - Invalid
// let multiply = (x,y)
// => x*y

// console.log(multiply)

// Line Breaks - Invalid
let multiply = (x,y) => 
x*y
console.log(multiply(1,2))

// Object Literal 

// let setColor = function(color) {
//     return {value: color}
// }

// let backgroundColor = setColor('Green')
// console.log(backgroundColor.value)

// let setColor = color => ({value:color})

// console.log(setColor('green'))

// var employee = {
//     id: 1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// var employee = {
//     id: 1,
//     greet: function(){
//         var self = this;
//         setTimeout(function(){
//             console.log(self.id)
//         }, 1000)
        
//     }
// }

// employee.greet()


// var employee = {
//     id: 1,
//     greet: function(){
//         setTimeout(
//         function(){
//             console.log(this.id)
//         }.bind(this)
//         , 1000)
        
//     }
// }

// employee.greet()

var employee = {
    id: 1,
    greet: function(){
        console.log(this)
        setTimeout(() => {
            console.log(this.id)
        }, 1000)
        
    }
}

employee.greet()


