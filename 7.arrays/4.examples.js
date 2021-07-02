/*
 ? Push - add element at the end
 ? pop - remove element at the end
 ? unshift - add element at the start
 ? shift - remove the element at the end
 */


var array = [4,5,6]
array.push(7)
array.push(8)
array.unshift(3)
array.unshift(2)
array.unshift(1)
array.pop()
array.shift()
console.log(array)

// Array to String
var array = [4,5,6]
var arrayString = array.join(',')
console.log(arrayString, typeof arrayString)

// Convert String to Array using Split
var name = "scott"
var nameArray = name.split('')
console.log(nameArray)

var name = "scott desatnick"
var nameArray = name.split('')
console.log(nameArray)

var name = "scott desatnick"
var nameArray = name.split(' ')
console.log(nameArray)

var name = "scott,adam,tuan,uma"
var nameArray = name.split(',')
console.log(nameArray)

var name = "scott#adam#tuan#uma"
var nameArray = name.split(',')
console.log(nameArray)

var name = "scott#adam#tuan#uma"
var nameArray = name.split('#')
console.log(nameArray)

var name = "scott#adam#tuan#uma"
var nameArray = name.split('a')
console.log(nameArray)

// How to empty na array
var array= ['a' ,'b', 'c', 'd']

// 1st way 
while(array.length){
    array.pop()
}

//2nd way
console.log(array, typeof array)

while(array.length){
    array.shift()
}

console.log(array)

//3rd way 

array =[]
console.log(array, typeof array)

//4th way 
array.length =0;
console.log(array)

//5th way 
array.splice(0, array.length)
console.log(array)