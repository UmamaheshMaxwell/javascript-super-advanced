// we can define function with name
// which is of no use
// var display = function sample (){  
//     console.log('This is display method')
// }'

// hosting 

// Anonymous or function expression 

console.log(display)
console.log(a)
console.log(b)

var display = function (){
    console.log('This is display method')
}

var a =10 ;
console.log(a)
var b ="uma"

sample()

function sample(){
    console.log('function sample is invoked')
}

var callMe = function(message, name){
    //console.log(message + ' ' + name)
     return message + ' ' + name
}

console.log(callMe('Good Morning', 'JohnGalt'))
