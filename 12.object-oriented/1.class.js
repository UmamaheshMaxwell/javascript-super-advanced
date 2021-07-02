/* 
 ? Class
 */
function Student(){
    
}

/* 
 ? Instance
 */
var student1 = new Student() // student1 is called and instance
var student2 = new Student() // student2 is called and instance

/* 
 ? Constructor
 */

 function Order() {
    console.log('Order is called')
 }

 var order1 = new Order() // Order() is constructor

/* 
 ? Properties
 */

 function Customer(gender){
     this.gender = gender
 }

 var customer1 = new Customer('Female')
 console.log(customer1)

 var customer2 = new Customer('Male')
 console.log(customer2)

 /* 
 ? Methods
 */

 function Person(firstName, lastName){
     this.firstName = firstName
     this.lastName= lastName
     this.getFullName = function(){
         return this.firstName + ' ' + this.lastName
     }
 }

Person.prototype.getFirstName = function(){
    return "Hello " + this.firstName 
}

// Static Method
 Person.getFirstName = function(lastName){
    return "How are you ? " + lastName
 }

 var person1 = new Person('Uma', 'Mahesh')
 var output = person1.getFirstName()
 console.log(output)

 var getFirstName = Person.getFirstName('Mahesh')
 console.log(getFirstName)

 var obj = {}
 console.log(obj)
 function Display(){

 }
var display = new Display()
console.log(display)


function Teacher(){
    this.name ="John"
    this.gender = "M"
}

var teacherObj = new Teacher();
console.log(Teacher.prototype) // Constructor
console.log(teacherObj.prototype) // undefined
console.log(typeof teacherObj.prototype) // undefined
console.log(teacherObj.__proto__) // Constructor
console.log(Teacher.__proto__) // Pointing to function

console.log(typeof Teacher.prototype)
console.log(typeof teacherObj.__proto__)

console.log(Teacher.prototype === teacherObj.__proto__)
