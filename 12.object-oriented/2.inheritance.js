function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function Student(age){
    this.age = age;
}

// Inherit the properties from Parent / SuperType
Student.prototype = new Person('Uma', 'Mahesh')

Student.prototype.getAge = function(){
    return this.age;
}

var student1 = new Student(39)
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.age)
console.log(student1.getFullName())
console.log(student1.getAge())

var person1 = new Person('Tuan', 'Bui')
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.getFullName())
//console.log(person1.getAge())