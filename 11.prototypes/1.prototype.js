function Student(firstName, lastName, city){
    this.firstName = firstName
    this.lastName = lastName

    this.getMessage= function(){

    }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Student.prototype.city = "Boston"

var student1 = new Student('Paul', 'Charniak');
student1.city ="Sydeny"
console.log(student1)
console.log(student1.getFullName())
console.log(student1.city)

var student2 = new Student('Vince', 'Lee');
console.log(student2)
console.log(student2.getFullName())
console.log(student2.city)

var student3 = new Student('John', 'Reiber');
console.log(student3)
console.log(student3.getFullName())
console.log(student3.city)