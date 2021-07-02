var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

function getMessage(message, city){
    return message + ' ' + 
           city + ' ' +
           this.firstName + ' ' + 
           this.lastName
}

// 1st Way 

var sayHelloToPerson1 = getMessage.bind(person1)
console.log(sayHelloToPerson1('Good Morning', 'Hyderabad'))

var sayHelloToPerson2 = getMessage.bind(person2)
console.log(sayHelloToPerson2('Good Morning', 'Hyderabad'))

var sayHelloToPerson3 = getMessage.bind(person3)
console.log(sayHelloToPerson3('Good Morning', 'Hyderabad'))

// 2nd Way 
var sayHello = getMessage.bind(person2)('Hello From', 'Pune')
console.log(sayHello)