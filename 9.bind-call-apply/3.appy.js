var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', 
               lastName: 'Bui', 
               getFullName: function(){
                   return this.firstName + ' ' + this.lastName
               }
            }

function getMessage(message, city){
    return message + ' ' + 
           city + ' ' +
           this.firstName + ' ' + 
           this.lastName + ' ' + 
           this.getFullName()
}

var sayHello = getMessage
                .apply(person3, ['Good Morning', 'Mumbai', 'john', 'Ryan', 'Paul'])
console.log(sayHello)
