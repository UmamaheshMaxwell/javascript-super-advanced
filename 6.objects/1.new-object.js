// var a =10
// var b = a;
// a =20;

// console.log(a)
// console.log(b)

// var x = [1,2,3]
// var y = x;
// x.push(4)

// console.log(x)
// console.log(y)

// var m =[1,2,3]
// var n = m;
// m = [1,2,3,4]

// console.log(m)
// console.log(n)

var person = new Object()

person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var city ="myCity";
person[city] ="Hyderabad"


console.log(person["firstName"])

person.state="Hyderabad"

person.address = new Object()

person.address.street="1st Main"

person["address"]["country"]="India"

console.log(person)
console.log(person["address"]["country"])
console.log(person.address.street)




