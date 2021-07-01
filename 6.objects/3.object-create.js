// var obj ={}
// var person1 = Object.create(obj)

// var person2 = Object.create({})

// var person3 = Object.create(new Object()) 

// var person4 = Object.create(Object.create(null))

// var person5 = Object.create(null)

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
// console.log(person5)

var person = Object.create({})

person["firstName"] ="Uma"
person.lastName = "Mahesh"
person.age = 16
person.address = {}

person.address.city="Hyderabad"
person.address.state ="Telangana"
person.address.country ="India"

console.log(person)


var Student = function(){

}

var student1 = new Student()
console.log(student1)