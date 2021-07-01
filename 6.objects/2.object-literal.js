// Object Literal Syntax
// Creating an Object with properties outside
var person = {}


person["firstName"] ="Uma"
person.lastName = "Mahesh"
person.age = 16
person.address = {}

person.address.city="Hyderabad"
person.address.state ="Telangana"
person.address.country ="India"

console.log(person)

// Creating an Object with properties inside
var student = {
    firstName: 'Who is',
    lastName: 'Johngalt',
    age: 35,
    address: {
        city: 'Boston',
        state:'MA',
        pincode: 112234,
        cuntry: 'USA'
    },
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    },
    getFullName2: function(){
        return student.firstName + ' ' + student.lastName
    }
}

console.log(student)

console.log(student.getFullName())
console.log(student.getFullName2())