var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

function getMessage(message, city){
    return message + ' ' + 
           city + ' ' +
           this.firstName + ' ' + 
           this.lastName
}

var sayHelloUsingCall = getMessage.call(person2, 'Good Morning', 'Mumbai')
console.log(sayHelloUsingCall)

function getFullName(){
    return this.firstName + ' ' + this.lastName
}

var fullName = getFullName.call(person1)
console.log(fullName)